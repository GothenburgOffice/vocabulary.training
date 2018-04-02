export default function errorPopup(state = {}, action) {

  switch(action.type){

  case 'POPUP':
    return {...state, ...action.payload};
  default:
    return state;

  }
}