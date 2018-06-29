// assets
import gridmanScreen from './img/projects/gridman-screen.jpg'
import gridmanIcon from './img/projects/gridman-icon.png'
import florcalderonScreen from './img/projects/florcalderon-screen.png'
import florcalderonIcon from './img/projects/florcalderon-icon.svg'
import jammmingScreen from './img/projects/jammming-screen.png'
import jammmingIcon from './img/projects/jammming-icon.png'
import gymapScreen1 from './img/projects/gymap-screen1.jpg'
import gymapScreen2 from './img/projects/gymap-screen2.jpg'
import gymapIcon from './img/projects/gymap-icon.svg'
import tallyScreen1 from './img/projects/tally-screen1.jpg'
import tallyScreen2 from './img/projects/tally-screen2.jpg'
import tallygoIcon from './img/projects/tallygo-icon.png'
import  steplerScreen1 from './img/projects/stepler-screen1.jpg'
import  steplerScreen2 from './img/projects/stepler-screen2.jpg'
import  steplerIcon from './img/projects/stepler-icon.jpg'


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
            ['Node / Express', 3.9],
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
            description: 'CSS Grid inspector for Chrome. The only one CSS-grid highlighter that is lightning Fast!  I’m working on it as Developer.',
            infoA: ['Front End Web Engineer','React, D3 , SVG, CSS Grid', 2018, 'San Jose, CA', 'https://goo.gl/kuP9iR'],
        },
        {
            name: 'florcalderon.com ',
            screens: [florcalderonScreen],
            icon: florcalderonIcon,
            description: 'My personal profile page. Starting from ideations, continued with design, layout architecture, full development & support.',
            infoA: ['Front End Engineer & Designer','React, SVG, Sass, Sketch', 2018, 'San Jose, CA', 'https://florcalderon.com'],
            right: true  // instruction this project should flip to right design

        },
        {
            name: 'Jammming Project',
            screens: [jammmingScreen],
            icon: jammmingIcon,
            description:`Spotify playlist manager that i've build during Pro Intense course at Codecademy.
            It involved work with Spotify APIs, Spotify Authorization, Deployment & Design`,
            infoA:['Full Stack Engineer','React, Node, Express, APIs, CSS3', 2017, 'San Jose, CA', 'https://jamm_ming.surge.sh'],
        },
        {
            name: 'TallyGo',
            screens: [tallyScreen1, tallyScreen2],
            icon: tallygoIcon,
            description: 'Simple count up project that I fully build myself. Started from market research, ideations, sketching, design, development and testing on phones and tablets.',
            infoA: ['Mobile Web Engineer','jQuery, Selenium, Xcode, Sketch', 2016, 'Santa Clara, CA', 'https://www.facebook.com/tallygoapp'],
            mobile: true,
            right: true
        },
        {
            name: 'Gymap',
            screens: [gymapScreen1, gymapScreen2],
            icon: gymapIcon,
            description: 'I was doing Automated Quality testing for Android & iOS platforms across mobile and tablet devices.',
            infoA: ['QA Engineer','JavaScript, Selenium, Xcode', 2016, 'San Jose, CA', 'http://gymap.me'],
            mobile: true,
        },
        {
            name: 'Stepler',
            screens: [steplerScreen1, steplerScreen2],
            icon: steplerIcon,
            description: 'I performed discovery testing and focused on testing Spanish voice recognition feature on Android & iOS platforms.',
            infoA: ['QA Engineer','JavaScript, Selenium IDE, Xcode', 2015, 'San jose, CA'],
            mobile: true,
            right: true
        },
    ]

}

export default constants
