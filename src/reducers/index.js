import { combineReducers } from "redux";
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  posts: postsReducer, // assign the postsReducer to posts
  users: usersReducer,
});