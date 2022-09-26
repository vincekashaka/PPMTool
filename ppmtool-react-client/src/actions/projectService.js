import axios from 'axios';

const API_URI = 'http://localhost:8080/api/v1/project';

//Create project
const createProject = (project, history) => async () => {
  const config = {
    headers: {
      Authorization: application / json,
    },
  };
  const response = await axios.post(API_URI, project);
  return response.data;
};
const projectService = {
  createProject,
};

export default projectService;
