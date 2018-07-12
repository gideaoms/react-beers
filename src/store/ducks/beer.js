export const Types = {
  GET_LIST_REQUEST: 'beer/GET_LIST_REQUEST',
  GET_LIST_SUCCESS: 'beer/GET_LIST_SUCCESS',
  GET_LIST_FAILURE: 'beer/GET_LIST_FAILURE',
  GET_ONE_REQUEST: 'beer/GET_ONE_REQUEST',
  GET_ONE_SUCCESS: 'beer/GET_ONE_SUCCESS',
  GET_ONE_FAILURE: 'beer/GET_ONE_FAILURE'
}

const INITIAL_STATE = {
  list: {
    data: [],
    loading: false
  },
  one: {
    data: {
      id: '',
      name: '',
      tagline: '',
      description: '',
      image_url: ''
    },
    loading: false
  }
}

export default function beer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_LIST_REQUEST:
      return { ...state, list: { data: [], loading: true } }
    case Types.GET_LIST_SUCCESS:
      return { ...state, list: { data: action.payload.data, loading: false } }
    case Types.GET_LIST_FAILURE:
      return { ...state }
    case Types.GET_ONE_REQUEST:
      return { ...state, one: { data: INITIAL_STATE.one.data, loading: true } }
    case Types.GET_ONE_SUCCESS:
      return { ...state, one: { data: action.payload.data, loading: false } }
    case Types.GET_ONE_FAILURE:
      return { ...state }
    default:
      return state
  }
}

export const Creators = {
  getBeersListRequest: () => ({ type: Types.GET_LIST_REQUEST }),
  getBeersListSuccess: data => ({
    type: Types.GET_LIST_SUCCESS,
    payload: { data }
  }),
  getBeersListFailure: () => ({ type: Types.GET_LIST_FAILURE }),
  getBeersOneRequest: id => ({
    type: Types.GET_ONE_REQUEST,
    payload: { id }
  }),
  getBeersOneSuccess: (data = INITIAL_STATE.one.data) => ({
    type: Types.GET_ONE_SUCCESS,
    payload: { data }
  }),
  getBeersOneFailure: () => ({ type: Types.GET_ONE_FAILURE })
}
