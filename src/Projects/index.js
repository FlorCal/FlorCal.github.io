// libraries
import React from 'react'

// components
import Ribbon from '../app/Ribbon'
import Project from './Project'

// assets
import gridmanScreen from '../app/img/projects/gridman-screen.jpg'
import gridmanIcon from '../app/img/projects/gridman-icon.png'

class ProjectsComponent extends React.Component {
  render() {
    return (
      <div className='ProjectsComponent'>
        <Ribbon title='Projects'/>
        <Project
          screens={[gridmanScreen]}
          icon={gridmanIcon}/>

      </div>
    );
  }
}

export default ProjectsComponent
