import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { Creators as BeerActions } from '../store/ducks/beer'
import Loading from './Loading'
import BeerResume from './BeerResume'

class BeerList extends Component {
  componentDidMount () {
    this.props.getBeersListRequest()
  }

  render () {
    if (this.props.beer.list.loading) {
      return <Loading />
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Tagline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.beer.list.data.map(beer => (
            <BeerResume key={beer.id} beer={beer} />
          ))}
        </tbody>
      </table>
    )
  }
}

BeerList.propTypes = {
  beer: PropTypes.shape({
    list: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.any,
          name: PropTypes.string,
          tagline: PropTypes.string
        })
      ).isRequired,
      loading: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  beer: state.beer
})

const mapDispatchToProps = dispatch => bindActionCreators(BeerActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList)
