import {combineReducers} from "redux";

// reducer for /products fetch
function products(state = [], action) {
  if (action.type === "PRODUCTS_LOADED") {
    return action.value;
  }
  return state;
}

// reducer for /contacts fetch
function contacts(state = [], action) {
  if (action.type === "CONTACTS_LOADED") {
    return action.value;
  }
  return state;
}

// reducer for /vehicles fetch
function vehicles(state = [], action) {
  if (action.type === "VEHICLES_LOADED") {
    return action.value;
  }
  return state;
}

// reducer for /comments fetch
function comments(state = [], action) {
  if (action.type === "COMMENTS_LOADED") {
    return action.value;
  }
  return state;
}

// create and export rootReducer
const rootReducer = combineReducers({
  products,
  contacts,
  vehicles,
  comments
});
export default rootReducer;
