// libraries
import React from 'react'

// components
import Ribbon from '../app/Ribbon'
import Project from './Project'

// assets
import gridmanScreen from '../app/img/projects/gridman-screen.jpg'

class ProjectsComponent extends React.Component {
  render() {
    return (
      <div className='ProjectsComponent'>
        <Ribbon title='Projects'/>
        <Project screens={[gridmanScreen]} />
      </div>
    );
  }
}

export default ProjectsComponent
