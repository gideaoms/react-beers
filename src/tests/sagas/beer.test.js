import SagaTester from 'redux-saga-tester'
import MockAdapter from 'axios-mock-adapter'
import rootSaga from '../../store/sagas'
import api from '../../services/api'
import {
  Creators as BeerActions,
  Types as BeerTypes
} from '../../store/ducks/beer'
const apiMock = new MockAdapter(api)

describe('Beer saga', () => {
  let sagaTester = null

  beforeEach(() => {
    sagaTester = new SagaTester({})
    sagaTester.run(rootSaga)
  })

  it('should be able to fetch beers from API', async () => {
    const apiFixture = [
      { id: 1, name: 'Name 01', tagline: 'Tagline 01' },
      { id: 2, name: 'Name 02', tagline: 'Tagline 02' },
      { id: 3, name: 'Name 03', tagline: 'Tagline 03' }
    ]
    apiMock.onGet('/beers').reply(200, apiFixture)
    sagaTester.dispatch(BeerActions.getBeersListRequest())
    await sagaTester.waitFor(BeerTypes.GET_LIST_SUCCESS)
    expect(sagaTester.getLatestCalledAction()).toEqual(
      BeerActions.getBeersListSuccess(apiFixture)
    )
  })

  it('should be able to fetch one beer from API', async () => {
    const apiFixture = [
      {
        id: '1',
        tagline: 'Tagline',
        name: 'Name',
        description: 'Desc',
        image_url: 'https://images.punkapi.com/v2/keg.png'
      }
    ]
    apiMock.onGet('/beers/1').reply(200, apiFixture)
    sagaTester.dispatch(BeerActions.getBeersOneRequest(1))
    await sagaTester.waitFor(BeerTypes.GET_ONE_SUCCESS)
    expect(sagaTester.getLatestCalledAction()).toEqual(
      BeerActions.getBeersOneSuccess(apiFixture[0])
    )
  })
})
