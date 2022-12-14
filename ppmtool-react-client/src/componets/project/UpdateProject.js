import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getProject, createProject } from '../../actions/projectActions';
import { useParams } from 'react-router-dom';

class UpdateProject extends Component {
  //set state
  constructor() {
    super();

    this.state = {
      id: '',
      projectName: '',
      projectIdentifier: '',
      projectDescription: '',
      startDate: '',
      endDate: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const {
      id,
      projectName,
      projectIdentifier,
      projectDescription,
      startDate,
      endDate,
    } = nextProps.project;

    this.setState({
      id,
      projectName,
      projectIdentifier,
      projectDescription,
      startDate,
      endDate,
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(getProject());
    this.props.getProject(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const updateProject = {
      id: this.state.id,
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      projectDescription: this.state.projectDescription,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    };

    this.props.createProject(updateProject, this.props.history);
  }

  render() {
    return (
      <div className='project'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h5 className='display-4 text-center'>Update Project form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control form-control-lg '
                    placeholder='Project Name'
                    name='projectName'
                    value={this.state.projectName}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Unique Project ID'
                    name='projectIdentifier'
                    disabled
                  />
                </div>
                <br />
                <div className='form-group'>
                  <textarea
                    className='form-control form-control-lg'
                    placeholder='P[roject Description'
                    name='projectDescription'
                    value={this.state.projectDescription}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <h6>Start Date</h6>
                <div className='form-group'>
                  <input
                    type='date'
                    className='form-control form-control-lg'
                    name='startDate'
                    value={this.state.startDate}
                    onChange={this.onChange}
                  />
                </div>
                <h6>Estimated End Date</h6>
                <div className='form-group'>
                  <input
                    type='date'
                    className='form-control form-control-lg'
                    name='endDate'
                    value={this.state.endDate}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type='submit'
                  className='btn btn-primary btn-block mt-4'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project.project,
});
export default connect(mapStateToProps, { getProject, createProject })(
  UpdateProject
);
