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
        let d = this.props.data

        return (
            // checks if project should flip to right design
            <div className={'ProjectComponent' +
                (d.right ? ' right' : '')
            }>

                <img src={desktop} className='desktop' />

                <div className='screen'
                    style={{
                        //  proportions for screen inherited from scss
                        // to use for every desktop screen
                        background: 'url(' + d.screens[0] + ')'
                    }}>
                </div>

                <div className='company'>

                    <div className='icon'
                        style={{
                            //  proportions for icon inherited from scss
                            // to use for every company icon
                            background: 'url(' + d.icon + ')'
                        }}>
                    </div>

                    <div className='name'>
                        {d.name}
                    </div>

                    <div className='description'>
                        {d.description}
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
                    <div>{d.infoA[0]}</div>
                    <div>{d.infoA[1]}</div>
                    <div>{d.infoA[2]}</div>
                    <div>{d.infoA[3]}</div>
                    <div onClick={this.onExternalLinkClick.bind(this)}>{d.infoA[4]}<i /></div>
                </div>


            </div>
        )
    }
}

export default ProjectComponent
