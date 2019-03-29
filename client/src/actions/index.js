//action creator are used to make changes to the reducers to makes changes to
//the rexux store which will make changes to the components that it is linked to

//used to send ajax requests using our node.js requests thaat we created
import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  return function(dispatch) {
    axios.get('/api/current_user')
      .then(res => dispatch({
        type: FETCH_USER,
        payload: res
       })
     );
  }
};
