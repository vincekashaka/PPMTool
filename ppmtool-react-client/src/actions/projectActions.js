import axios from 'axios';

import { GET_ERRORS } from './types';

export const createProject = (project, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      'http://localhost:8080/api/v1/project',
      project
    );
    // dispatch({ type: GET_ERRORS, payload: { ...res, history } });
    history.push('/');
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
