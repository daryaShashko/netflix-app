const initialState = [
  'release date'
];

export function sort(state = initialState, action) {
  if (action.type === 'SORT_BY') {
    return [action.sortValue];
  }
  return state;
}