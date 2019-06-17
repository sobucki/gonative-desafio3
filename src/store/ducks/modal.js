/**
 * ACTIONS TYPES
 */
export const Types = {
  SHOW: 'SHOW_MODAL',
  HIDE: 'HIDE_MODAL',
};

/**
 * REDUCER
 */
const INITIAL_STATE = {
  visible: false,
  coordinate: null,
};

/**
 * state -> estado atual
 * action -> nome da ação e objetos de parametros
 */
export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW:
      return { ...state, visible: true, coordinate: action.payload.coordinate };
    case Types.HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}

/**
 * ACTIONS CREATORS
 */
export const Creators = {
  showModal: coordinate => ({
    type: Types.SHOW,
    payload: { coordinate },
  }),

  hideModal: () => ({
    type: Types.HIDE,
  }),
};
