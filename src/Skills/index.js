// libraries
import React from 'react'

// components
import Ribbon from '../app/Ribbon'
import Skill from './Skill'

// assets
import constants from '../app/constants'

class SkillsComponent extends React.Component {
    render() {
        return (
            <div className='SkillsComponent'>
                <Ribbon title='Skills'/>
                <div className='group1'>
                    {constants.skills.group1.map((skill, i) => (
                        <Skill
                            key={i}
                            title={skill[0]}
                            points={skill[1]} />
                    ))}

                </div>
                <div className='group2'>
                    {constants.skills.group2.map((skill, i) => (
                        <Skill
                            key={i}
                            title={skill[0]}
                            points={skill[1]} />
                    ))}

                </div>
            </div>
        );
    }
}

export default SkillsComponent
