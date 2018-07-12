import { all, takeLatest } from 'redux-saga/effects'
import { Types as BeerTypes } from '../ducks/beer'
import { getBeers, getBeer } from './beer'

export default function * rootSaga () {
  yield all([
    takeLatest(BeerTypes.GET_LIST_REQUEST, getBeers),
    takeLatest(BeerTypes.GET_ONE_REQUEST, getBeer)
  ])
}
