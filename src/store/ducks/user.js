/**
 * ACTIONS TYPES
 */
export const Types = {
  ADD_REQUEST: 'ADD_USER_REQUEST',
  ADD_SUCCESS: 'ADD_USER_SUCCESS',
  ADD_FAILURE: 'ADD_USER_FAILURE',
};

/**
 * REDUCER
 */
const INITIAL_STATE = {
  data: [],
  coordinate: null,
  loading: false,
  error: null,
};

/**
 * state -> estado atual
 * action -> nome da ação e objetos de parametros
 */
export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.userData],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * ACTIONS CREATORS
 */
export const Creators = {
  addUserRequest: (username, coordinate) => ({
    type: Types.ADD_REQUEST,
    payload: { username, coordinate },
  }),
  addUserSuccess: userData => ({
    type: Types.ADD_SUCCESS,
    payload: { userData },
  }),
  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
