
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
}

// export const signup = (user) => dispatch => signup(user)
//   .then(dispatch())

// export const login = (user) => dispatch => login(user)
//   .then(dispatch())

// export const logout = () => dispatch => logout()
//   .then(dispatch())



