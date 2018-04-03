export function FirebaseAuthState(state = false, user = null) {

  return function(dispatch){

    if (user === null) {
      user = {
        uid: null,
        displayName: null
      };
    }

    dispatch({
      type: 'AUTH_STATE',
      payload: {
        isLoggedin: state,
        user: user,
      }
    });

  };

}
