// assets
import gridmanScreen from './img/projects/gridman-screen.jpg'
import gridmanIcon from './img/projects/gridman-icon.png'
import rangiboraScreen from './img/projects/rangibora-screen.jpg'
import rangiboraIcon from './img/projects/rangibora-icon.svg'
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
import steplerScreen1 from './img/projects/stepler-screen1.jpg'
import steplerScreen2 from './img/projects/stepler-screen2.jpg'
import steplerIcon from './img/projects/stepler-icon.jpg'
import mywanderScreen1 from './img/projects/mywander-screen1.jpg'
import mywanderScreen2 from './img/projects/mywander-screen2.jpg'
import mywanderIcon from './img/projects/mywanderlogo.svg'

// import stealthmode2 from './img/projects/stealthmode2.png'
// import stealthmodeIcon from './img/projects/stealthmode-icon.svg'

var constants = {
    urls: {
        myResume: 'https://docs.google.com/document/d/1_bNyPdz65bECHR3tj4eAU3xW_hqCvCZazvr8hsarHI0/edit?usp=sharing',
        myGit:
            'https://github.com/FlorCal',
        myLinkedin:
            'https://www.linkedin.com/in/flor-calderon-8280b0114'
    },

    jobStatus: 'Looking for opportunities',

    skills: {
        group1: [
            ['JavaScript / TypeScript', 9.5, [2016, 2017, 2018, 2019, 2020]],
            ['React / Hooks / Redux', 8.5, [2017, 2018, 2019, 2020]],
            ['Node / Express / Mongo', 8.5, [2016, 2017, 2018, 2019, 2020]],
            ['GraphQL / Apollo', 7, [2018, 2019, 2020]],
            ['D3 / SVG', 6.5, [2018, 2019]],

        ],
        group2: [
            ['HTML5 / CSS3', 10, [2015, 2016, 2017, 2018, 2019, 2020]],
            ['Styled-Components', 9.5, [2015, 2016, 2017, 2018, 2019, 2020]],
            ['Git / GitHub / Bitbucket', 8.2, [2016, 2017, 2018, 2019, 2020]],
            ['Scrum / Jira / Trello', 9.1, [2016, 2017, 2018, 2019, 2020]],
            ['Design / Figma / Sketch', 7.5, [2016, 2017, 2018, 2019, 2020]],
        ]
    },

    projects: [
        {
            name: 'MyWander',
            screens: [mywanderScreen1, mywanderScreen2],
            icon: mywanderIcon,
            description: 'Group travel product focused on scheduling. Adaptive Mobile and Web UI. Design System from scratch.',
            infoA: [
                'Full Stack Engineer',
                [
                    'Front End: React/Redux/Router, Webpack, ES6, HTML, CSS/Sass',
                    'Back End: MongoDB, Monk, Node JS, Express, Bcrypt'
                ],
                2018, 'San Mateo, CA', 'http://app.mywander.co/'],
            mobile: true
        },
        {
            name: 'Rangi Bora',
            screens: [rangiboraScreen],
            icon: rangiboraIcon,
            description: 'Programmatic generator of accessible and pleasing sets of 4 color palettes that are WCAG2 compliant. Dynamic hue, saturation and lightness steps fine tune along with AAA or AA score selection.',
            infoA: ['Front End Engineer', 'React, Webpack, Sass, CSS Grid', 2017, 'San Francisco, CA', 'http://www.rangibora.com/'],
            right: true
        },
        {
            name: 'Gridman',
            screens: [gridmanScreen],
            icon: gridmanIcon,
            description: 'CSS Grid inspector for Chrome. The only one CSS-grid highlighter that is lightning Fast!  I’m working on it as Developer.',
            infoA: ['Front End Web Engineer', 'React, D3 , SVG, CSS Grid', 2017, 'San Jose, CA', 'https://goo.gl/kuP9iR'],
        },
        {
            name: 'florcalderon.com ',
            screens: [florcalderonScreen],
            icon: florcalderonIcon,
            description: 'My personal profile page. Starting from ideations, continued with design, layout architecture, full development & support.',
            infoA: ['Front End Engineer & Designer', 'React, SVG, Sass, Sketch', 2017, 'San Jose, CA', 'https://florcalderon.com'],
            right: true
        },
        {
            name: 'Jammming Project',
            screens: [jammmingScreen],
            icon: jammmingIcon,
            description: `Spotify playlist manager that involved working with Spotify APIs, Spotify Authorization, Deployment & Design`,
            infoA: ['Full Stack Engineer', 'React, Node, Express, APIs, CSS3', 2016, 'San Jose, CA', 'https://jamm_ming.surge.sh'],
        },
        {
            name: 'TallyGo',
            screens: [tallyScreen1, tallyScreen2],
            icon: tallygoIcon,
            description: 'Simple count up project that I fully build myself. Started from market research, ideations, sketching, design, development and testing on phones and tablets.',
            infoA: ['Mobile Web Engineer', 'jQuery, Selenium, Xcode, Sketch', 2016, 'Santa Clara, CA', 'https://www.facebook.com/tallygoapp'],
            mobile: true,
            right: true
        },
        {
            name: 'Gymap',
            screens: [gymapScreen1, gymapScreen2],
            icon: gymapIcon,
            description: 'I was doing Automated Quality testing for Android & iOS platforms across mobile and tablet devices.',
            infoA: ['QA Engineer', 'JavaScript, Selenium, Xcode', 2014, 'San Jose, CA', 'http://gymap.me'],
            mobile: true,
        },
        {
            name: 'Stepler',
            screens: [steplerScreen1, steplerScreen2],
            icon: steplerIcon,
            description: 'I performed discovery testing and focused on testing Spanish voice recognition feature on Android & iOS platforms.',
            infoA: ['QA Engineer', 'JavaScript, Selenium IDE, Xcode', 2014, 'San jose, CA'],
            mobile: true,
            right: true
        },
    ]

}

export default constants
