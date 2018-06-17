import React from 'react'
import Ribbon from '../app/Ribbon'
import Project from './Project'

class ProjectsComponent extends React.Component {
  render() {
    return (
      <div className='ProjectsComponent'>
        <Ribbon title='Projects'/>
        <Project />
      </div>
    );
  }
}

export default ProjectsComponent
