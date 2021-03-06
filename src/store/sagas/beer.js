import { call, put } from 'redux-saga/effects'
import { Creators as BeerActions } from '../ducks/beer'
import api from '../../services/api'

export function * getBeers () {
  try {
    const response = yield call(api.get, '/beers')
    yield put(BeerActions.getBeersListSuccess(response.data))
  } catch (err) {
    yield put(BeerActions.getBeersListFailure(err.data.message))
  }
}

export function * getBeer (action) {
  try {
    const response = yield call(api.get, `/beers/${action.payload.id}`)
    yield put(BeerActions.getBeersOneSuccess(response.data[0]))
  } catch (err) {
    yield put(BeerActions.getBeersOneFailure(err.data.message))
  }
}
