// import React, { Component } from 'react';
import React from 'react';
import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { getProject } from '../../actions/projectActions';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProject = ({ project }) => {
  const [projectName, setprojectName] = useState(project.projectName);
  const [projectIdentifier, setprojectIdentifier] = useState(
    project.projectIdentifier
  );
  const [projectDescription, setprojectDescription] = useState(
    project.projectDescription
  );
  const [startDate, setstartDate] = useState(project.startDate);
  const [endDate, setendDate] = useState(project.endDate);

  let { id } = useParams();

  console.log(id);
  // class UpdateProject extends Component {
  //   componentDidMount() {
  //     const { id } = this.props.match.params;
  //     this.props.getProject(id, this.props.history);
  //   }
  useEffect(() => {
    getProject(id);
  }, []);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      getProject({
        projectName,
        projectIdentifier,
        projectDescription,
        startDate,
        endDate,
      })
    );
    setprojectName(project.projectName);

    // if (
    //   !projectName ||
    //   !projectIdentifier ||
    //   !projectDescription ||
    //   !startDate ||
    //   !endDate
    // ) {
    //   return alert('Please fill out all fields');
    // }

    getProject(
      projectName,
      projectIdentifier,
      projectDescription,
      startDate,
      endDate
    );
  };
  return (
    <div className='project'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <h5 className='display-4 text-center'>Update Project form</h5>
            <hr />
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control form-control-lg '
                  name='projectName'
                  value={projectName}
                  onChange={(e) => setprojectName(e.target.value)}
                />
              </div>
              <br />
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  placeholder='Unique Project ID'
                  disabled
                />
              </div>
              <br />
              <div className='form-group'>
                <textarea
                  className='form-control form-control-lg'
                  name='projectIdentifier'
                  value={projectIdentifier}
                  onChange={(e) => setprojectDescription(e.target.value)}
                ></textarea>
              </div>
              <h6>Start Date</h6>
              <div className='form-group'>
                <input
                  type='date'
                  className='form-control form-control-lg'
                  name='startDate'
                  value={startDate}
                  onChange={(e) => setstartDate(e.target.value)}
                />
              </div>
              <h6>Estimated End Date</h6>
              <div className='form-group'>
                <input
                  type='date'
                  className='form-control form-control-lg'
                  name='endDate'
                  value={endDate}
                  onChange={(e) => setendDate(e.target.value)}
                />
              </div>

              <input type='submit' className='btn btn-primary btn-block mt-4' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project.project,
});
export default connect(mapStateToProps, { getProject })(UpdateProject);
