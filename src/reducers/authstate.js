export default function authState(state = {
  signin: false,
  user: {
    uid: null,
    displayName: null
  },
}, action) {
  switch(action.type){

  case 'AUTH_STATE':

    return action.payload;

  default:
    return state;

  }
}
