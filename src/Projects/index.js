// libraries
import React from 'react'

// components
import Ribbon from '../app/Ribbon'
import Project from './Project'

import constants from '../app/constants'

class ProjectsComponent extends React.Component {
    render() {
        return (
            <div id='project' className='ProjectsComponent'>
                <Ribbon title='Projects'/>

                {constants.projects.map((project, i)=>(
                    // iterating through each project
                    <Project
                        key={i}
                        data={project}/>
                ))}

            </div>
        );
    }
}

export default ProjectsComponent
