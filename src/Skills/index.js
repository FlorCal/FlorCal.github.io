// libraries
import React from 'react'

// components
import Ribbon from '../app/Ribbon'
import Skill from './Skill'

// assets
import constants from '../app/constants'

class SkillsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showYears: false
        };
    }
    render() {
        return (
            <div className='SkillsComponent'>
                <Ribbon title='Skills'/>

                <div className='links'>
                    <a>Points</a>
                    <a>Years</a>
                </div>

                <div className='group1'>
                    {constants.skills.group1.map((skill, i) => (
                        <Skill
                            key={i}
                            title={skill[0]}
                            points={skill[1]}
                            years={skill[2]}
                            showYears={this.state.showYears}
                        />
                    ))}

                </div>
                <div className='group2'>
                    {constants.skills.group2.map((skill, i) => (
                        <Skill
                            key={i}
                            title={skill[0]}
                            points={skill[1]}
                            years={skill[2]}
                            showYears={this.state.showYears}
                        />
                    ))}

                </div>
            </div>
        );
    }
}

export default SkillsComponent
