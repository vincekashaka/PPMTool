import React, { Component } from 'react';
import ProjectItem from './project/ProjectItem';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 className='alert alert-waring'> Welcome to the Dashboard</h1>;
        <ProjectItem />
      </div>
    );
  }
}
