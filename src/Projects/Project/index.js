// libraries
import React from 'react'

// assets
import desktop from '../../app/img/desktop.svg'


class ProjectComponent extends React.Component {
  render() {
    return (
      <div className='ProjectComponent'>
        <img src={desktop} className='desktop' />
        <div
        style={{
          background: 'url('+this.props.screens[0]+')'
        }}
        className='screen'/>
      </div>
    )
  }
}

export default ProjectComponent
