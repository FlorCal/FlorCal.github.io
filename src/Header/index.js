// libraries
import React from 'react'
import request from 'superagent'
// assets
import portrait from '../app/img/portrait.jpg'
import flower from '../app/img/flower.svg'
import resume from '../app/img/resume.svg'
import constants from '../app/constants'


class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: null
        };
    }

    onProjectClick() {
        window.scrollBy({
            top: 680, behavior: 'smooth'
        });
    }

    onContactClick() {
        window.scrollBy({
            top: 3800, behavior: 'smooth'
        });
    }

    onResumeClick() {
        var win = window.open(constants.urls.myResume, '_blank');
        win.focus();
    }

    UNSAFE_componentWillMount() {
        request
            .get('https://api.openweathermap.org/data/2.5/weather') // API endpoint(address)
            .query({ id: 5392171 })  // city id
            .query({ APPID: '1d18fba40fda8ca3bdb3d0ec2b999209' }) // API key
            .query({ units: 'imperial' }) // how we're receiving data
            .then(response => {
                this.setState({ temperature: ', ' + Math.round(response.body.main.temp) + '℉' })
            });
    }

    render() {
        return (
            <div className='HeaderComponent'>
                <div className="menu">
                    <a className='active'>Skills</a>
                    <a onClick={this.onProjectClick.bind(this)}>
                        Projects
                    </a>
                    <a onClick={this.onContactClick.bind(this)}>Contact</a>
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
                    <br />
                    <span>Download<br />Resume</span>
                </div>
                <div className="info">
                    <p>
                        <span>Current Location: </span>
                        <span className='fBlack'>San Jose, CA</span>
                        <span className='temp'>{this.state.temperature}</span>
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
