import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BeerResume = ({ beer: { id, name, tagline } }) => (
  <tr>
    <td>{name}</td>
    <td>{tagline}</td>
    <td>
      <Link to={`/${id}`} className='link'>
        Details
      </Link>
    </td>
  </tr>
)

BeerResume.propTypes = {
  beer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired
  }).isRequired
}

export default BeerResume
