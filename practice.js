// SARS
const redux = require("redux");
// state
const initialState = {
  userName: "",
  buttonClicked: "yes",
  premium: "",
  loggedin: "",
  delete: "",
};

// action

const CHANGE_USER = "CHANGE_USER";
const PREMIUM = "PREMIUM";
const LOG_IN = "LOG_IN";
const DELETE = "DELETE";

function changeUser() {
  return {
    type: CHANGE_USER,
    name: "ojima",
  };
}

function premium() {
  return {
    type: PREMIUM,
  };
}
function logIn() {
  return {
    type: LOG_IN,
  };
}
function deleteFile() {
  return {
    type: DELETE,
  };
}

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return { ...state, userName: action.name };
    case DELETE:
      return { ...state, delete: true };
    case PREMIUM:
      return { ...state, premium: true };
    case LOG_IN:
      return { ...state, loggedin: true };

    default:
      return state;
  }
};

// store
const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(changeUser());
store.dispatch(premium());
store.dispatch(logIn());
store.dispatch(deleteFile());
