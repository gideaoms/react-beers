import React from 'react'
import { shallow } from 'enzyme'
import createMockStore from 'redux-mock-store'
import BeerList from '../../components/BeerList'

const INITIAL_STATE = {
  beer: {
    list: {
      data: [
        { id: '1', name: 'Beer 1', tagline: 'Desc Beer 1' },
        { id: '2', name: 'Beer 2', tagline: 'Desc Beer 2' },
        { id: '3', name: 'Beer 3', tagline: 'Desc Beer 3' }
      ],
      loading: false
    }
  }
}

const mockStore = createMockStore()
const store = mockStore(INITIAL_STATE)

describe('BeerList component', () => {
  it('should render beers', () => {
    const wrapper = shallow(<BeerList />, { context: { store } })

    expect(
      wrapper
        .dive()
        .find('table tbody')
        .children()
    ).toHaveLength(3)
  })
})
