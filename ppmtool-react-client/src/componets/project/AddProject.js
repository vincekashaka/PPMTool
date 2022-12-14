import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { createProject } from '../../actions/projectActions';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      projectName: '',
      projectIdentifier: '',
      projectDescription: '',
      startDate: '',
      endDate: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //life cylce hooks
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }

  static getDerivedStateFromProps(props, state) {
    if (props.errors) return { errors: props.errors };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      projectDescription: this.state.projectDescription,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    };

    this.props.createProject(newProject, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <div>
        {
          // check name attribute input fields
          // creacte constructor
          //set state
          // set value on input fields
          //create onchange on each function
          //set onCahne on each input field
          //bind on constructor
          // state change in the react extension
        }
        <div className='project'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 m-auto'>
                <h5 className='display-4 text-center'>Create Project form</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className='form-group'>
                    <input
                      type='text'
                      className={`form-control form-control-lg ${
                        errors.projectName ? 'is-invalid' : ''
                      }`}
                      placeholder='Project Name'
                      name='projectName'
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />

                    {errors.projectName && (
                      <div className='invalid-feedback'>
                        {errors.projectName}
                      </div>
                    )}
                    <br />
                  </div>

                  <div className='form-group'>
                    <input
                      type='text'
                      className={`form-control form-control-lg ${
                        errors.projectName ? 'is-invalid' : ''
                      }`}
                      placeholder='Unique Project ID'
                      name='projectIdentifier'
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                    />
                    {errors.projectIdentifier && (
                      <div className='invalid-feedback'>
                        {errors.projectIdentifier}
                      </div>
                    )}
                    <br />
                  </div>
                  <div className='form-group'>
                    <textarea
                      className={`form-control form-control-lg ${
                        errors.projectName ? 'is-invalid' : ''
                      }`}
                      placeholder='Project Description'
                      name='projectDescription'
                      value={this.state.projectDescription}
                      onChange={this.onChange}
                    />
                    {errors.projectDescription && (
                      <div className='invalid-feedback'>
                        {errors.projectDescription}
                      </div>
                    )}
                    <br />
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
      </div>
    );
  }
}

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createProject })(AddProject);
