const initialState = [
  'title'
];

export function search(state = initialState, action) {
  if (action.type === 'SEARCH_BY') {
    return [action.sortValue];
  }
  return state;
}