// assets
import gridmanScreen from './img/projects/gridman-screen.jpg'
import gridmanIcon from './img/projects/gridman-icon.png'


var constants = {
    urls: {
        myResume: 'https://docs.google.com/document/d/1zMPzSCq54XSOGFKlDuBzbet3U_oo-87ZB6R_MieDJGA/edit?usp=sharing',
        myGit:
        'https://github.com/FlorCal',
        myLinkedin:
        'https://www.linkedin.com/in/flor-calderon-8280b0114'
    },

    jobStatus: 'Looking for opportunities',

    skills: {
        group1: [
            ['JavaScript / ES6', 7.5],
            ['React', 7.1],
            ['jQuery', 6.2],
            ['D3 / SVG', 4.5],
            ['Node / Express', 3.9]
        ],
        group2: [
            ['HTML5', 9.3],
            ['CSS3 / Sass', 8.1],
            ['Git / GitHub', 5.2],
            ['Scrum / Trello', 9.1],
            ['Sketch / Design', 6.5]
        ]
    },

    projects: [
        {
            name: 'Gridman',
            screens: [gridmanScreen],
            icon: gridmanIcon,
            description:'CSS Grid inspector for Chrome. The only one CSS-grid highlighter that is lightning Fast!  I’m working on it as Developer.',
            infoA:['Front end Web Developer','React, SVG, CSS Grid', 2018, 'San Jose, CA', 'https://goo.gl/kuP9iR'],
            right: true
        }
    ]

}

export default constants
