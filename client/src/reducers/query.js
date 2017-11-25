const initialState = [];

export function query(state = initialState, action) {

  if (action.type === 'CHANGE_QUERY') {
    return action.query
  }
  return state;
}