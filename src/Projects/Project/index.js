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
                        //  proportions for screen inherited from scss
                        // to use for every desktop screen
                        background: 'url('+this.props.screens[0]+')'
                    }}>
                </div>

                <div className='company'>

                    <div className='icon'
                        style={{
                            //  proportions for icon inherited from scss
                            // to use for every company icon
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

                <div className='info'>

                    <div className='role'>My Role</div>
                    <div className='technologies'>Technologies Used</div>
                    <div className='years'>Year of Work</div>
                    <div className='location'>Location</div>

                    <div className='description1'></div>
                    <div className='description2'></div>
                    <div className='description3'></div>
                    <div className='description4'></div>

                </div>


            </div>
        )
    }
}

export default ProjectComponent
