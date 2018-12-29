import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => { // this is a function due to using react-thunk
  return async dispatch => {  
    const response = await jsonPlaceholder.get('/posts');
    
    // response.data to only return the information needed
    dispatch({ type: 'FETCH_POSTS', payload: response.data})
  };
};