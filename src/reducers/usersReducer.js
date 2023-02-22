export default function users(state = [], action) {
  switch (action.type) {
    case 'FETCH_USERS':
      return [...action.payLoad];
    default:
      return state;
  }
}
