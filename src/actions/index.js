import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

/*
  Using Async await is possible because the action creators are being return as
  functions due to using redux thunk. This gives more control over the functions
  to return data in api requests in this scenario.
  outer function is returning the inner function  () => async () =>
*/

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log('About to fetch posts');
  await dispatch(fetchPosts());
  // grabs array of all userId matches through lodash's map function that are unique
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // call the fetch_user action creator for each id
  // userIds.forEach(id => dispatch(fetchUser(id))); 
  // don't need the await keyword because all data has been retreived and there is nothing else to wait on after this

  // does the same thing as the code above. 
  _.chain(getState().posts)
    .map('userId') // passes first arg (getState().posts) behind the scenes
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value(); // need this to execute the chained code
};

export const fetchPosts = () => async dispatch => { 
    const response = await jsonPlaceholder.get('/posts');
    
    // response.data to only return the information needed
    dispatch({ type: 'FETCH_POSTS', payload: response.data});
  };

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
  };