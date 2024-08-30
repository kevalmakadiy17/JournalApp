// Importing necessary functions and middleware from Redux
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";

// Importing reducers for user and notes
import { noteReducer } from "./notes/note.reducer";
import userReducer from "./users/user.reducer";

// Combining multiple reducers into a single rootReducer
let rootReducer = combineReducers({
  userReducer: userReducer,
  noteReducer: noteReducer
});

// Creating a Redux store by using createStore function with applyMiddleware
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
