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
      <div className='container'>
        <Link to='/' className='link'>
          Back
        </Link>
        <hr className='divisor' />
        <div className='input-group'>
          <span>ID</span>
          <input type='text' value={this.props.beer.data.id} disabled />
        </div>
        <div className='input-group'>
          <span>Name</span>
          <input type='text' value={this.props.beer.data.name} disabled />
        </div>
        <div className='input-group'>
          <span>Tagline</span>
          <input type='text' value={this.props.beer.data.tagline} disabled />
        </div>
        <div className='input-group'>
          <span>Description</span>
          <textarea
            defaultValue={this.props.beer.data.description}
            cols='30'
            rows='7'
            disabled
          />
        </div>
        <div className='input-group'>
          <span>Image</span>
          <img
            src={this.props.beer.data.image_url}
            alt={this.props.beer.data.name}
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
