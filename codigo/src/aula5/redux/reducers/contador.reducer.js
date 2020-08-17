const initialState = 0;

export const ACTION_TYPES = {
  SOMAR: "contador/SOMAR"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SOMAR:
      return state + action.payload;
    default:
      return state;
  }
};

export const somar = valor => dispatch =>
  dispatch({
    type: ACTION_TYPES.SOMAR,
    payload: valor
  });
