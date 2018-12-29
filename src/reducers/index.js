import { combineReducers } from "redux";
import postsReducer from './postsReducer';

export default combineReducers({
  posts: postsReducer, // assign the postsReducer to posts
});