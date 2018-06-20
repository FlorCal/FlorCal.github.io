// libraries
import React from 'react'

// assets
import portrait from '../app/img/portrait.jpg'
import flower from '../app/img/flower.svg'
import resume from '../app/img/resume.svg'
import constants from '../app/constants'


class HeaderComponent extends React.Component {

    onResumeClick() {
        var win = window.open(constants.urls.myResume, '_blank');
        win.focus();
    }

    render() {
        return (
            <div className='HeaderComponent'>
                <div className="menu">
                    <a className='active'>Skills</a>
                    <a>Projects</a>
                    <a>Contact</a>
                </div>
                <div className="portrait">
                    <img src={portrait} />
                </div>
                <div className="name">
                    <h1>Flor Calderon</h1>
                    <h2>Developer, Designer & Customer Advocate</h2>
                </div>
                <div className="flower">
                    <img src={flower} />
                </div>
                <div className="resume" onClick={this.onResumeClick.bind(this)}>
                    <img src={resume} />
                    <br/>
                    <span>Download<br/>Resume</span>
                </div>
                <div className="info">
                    <p>
                        <span>Current Location: </span>
                        <span className='fBlack'>San Jose, CA</span>
                    </p>
                    <p>
                        <span>Work Authorization: </span>
                        <span className='fBlack'>US Citizen</span>
                    </p>
                    <p>
                        <span>Job Status: </span>
                        <span className='fBlack'>{constants.jobStatus}</span>
                    </p>
                </div>
                <div className="slant">

                </div>
            </div>
        );
    }
}

export default HeaderComponent
