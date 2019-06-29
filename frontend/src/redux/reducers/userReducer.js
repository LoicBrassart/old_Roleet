import userActions from "../actions/userActions";

const initial = {
  isLoggedIn: false,
  token: undefined,
  data: {}
};

export default (state = initial, action) => {
  switch (action.type) {
    case userActions.USER_LOGIN.type:
      return {
        ...state,
        loggedIn: true,
        token: action.token,
        data: action.user
      };
    case userActions.USER_LOGOUT.type:
      return { ...state };
    default:
      return state;
  }
};
