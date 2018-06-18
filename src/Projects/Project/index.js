// libraries
import React from 'react'

// assets
import desktop from '../../app/img/desktop.svg'


class ProjectComponent extends React.Component {
  render() {
    return (
      <div className='ProjectComponent'>

        <img src={desktop} className='desktop' />

        <div className='screen'
          style={{
            background: 'url('+this.props.screens[0]+')'
          }}>
        </div>

        <div className='company'>

          <div className='icon'
            style={{
              background: 'url('+this.props.icon+')'
            }}>
          </div>

          <div className='name'>
            {this.props.name}
          </div>

          <div className='description'>
            {this.props.description}
          </div>

        </div>

      </div>
    )
  }
}

export default ProjectComponent
