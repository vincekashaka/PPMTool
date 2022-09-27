import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS } from './types';

// const history = useNavigate();

export const createProject = (project, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      'http://localhost:8080/api/v1/project',
      project
    );

    // dispatch({ type: GET_ERRORS, payload: { ...res, history } });
    // history.push('/');

    // navigate('/');
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getProjects = () => async (dispatch) => {
  const res = await axios.get('http://localhost:8080/api/v1/project/all');
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
};

export const getProject = (id, history) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/api/v1/project/${id}`);
  dispatch({
    type: GET_PROJECT,
    payload: res.data,
  });
};
