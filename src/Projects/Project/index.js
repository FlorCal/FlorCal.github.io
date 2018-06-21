// libraries
import React from 'react'

// assets
import desktop from '../../app/img/desktop.svg'


class ProjectComponent extends React.Component {

    onExternalLinkClick() {
        var win = window.open(this.props.data.infoA[4], '_blank');
        win.focus();
    }

    render() {
        return (
            <div className='ProjectComponent'>

                <img src={desktop} className='desktop' />

                <div className='screen'
                    style={{
                        //  proportions for screen inherited from scss
                        // to use for every desktop screen
                        background: 'url('+this.props.data.screens[0]+')'
                    }}>
                </div>

                <div className='company'>

                    <div className='icon'
                        style={{
                            //  proportions for icon inherited from scss
                            // to use for every company icon
                            background: 'url('+this.props.data.icon+')'
                        }}>
                    </div>

                    <div className='name'>
                        {this.props.data.name}
                    </div>

                    <div className='description'>
                        {this.props.data.description}
                    </div>

                </div>

                <div className='infoQ'>
                    <div>My Role</div>
                    <div>Technologies Used</div>
                    <div>Year of Work</div>
                    <div>Location</div>
                    <div>Url</div>
                </div>

                <div className='infoA fBlack' >
                    <div>{this.props.data.infoA[0]}</div>
                    <div>{this.props.data.infoA[1]}</div>
                    <div>{this.props.data.infoA[2]}</div>
                    <div>{this.props.data.infoA[3]}</div>
                    <div onClick={this.onExternalLinkClick.bind(this)}>{this.props.data.infoA[4]}<i /></div>
                </div>


            </div>
        )
    }
}

export default ProjectComponent
