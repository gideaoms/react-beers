import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Creators as BeerActions } from '../store/ducks/beer'
import Loading from './Loading'

class BeerDetails extends Component {
  componentDidMount () {
    this.props.getBeersOneRequest(this.props.match.params.id)
  }

  render () {
    if (this.props.beer.loading) {
      return <Loading />
    }

    return (
      <div>
        <Link to='/'>Back</Link>
        <div>
          <span>ID</span>
          <input type='text' value={this.props.beer.data.id} disabled />
        </div>
        <div>
          <span>Name</span>
          <input type='text' value={this.props.beer.data.name} disabled />
        </div>
        <div>
          <span>Tagline</span>
          <input type='text' value={this.props.beer.data.tagline} disabled />
        </div>
        <div>
          <span>Image</span>
          <img
            style={{ width: '150px' }}
            src={this.props.beer.data.image_url}
            alt={this.props.beer.data.name}
          />
        </div>
        <div>
          <span>Description</span>
          <textarea
            defaultValue={this.props.beer.data.description}
            cols='30'
            rows='10'
            disabled
          />
        </div>
      </div>
    )
  }
}

BeerDetails.propTypes = {
  beer: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired
    }).isRequired,
    loading: PropTypes.bool.isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  beer: state.beer.one
})

const mapDispatchToProps = dispatch => bindActionCreators(BeerActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerDetails)
