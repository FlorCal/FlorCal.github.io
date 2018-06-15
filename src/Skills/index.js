import React from 'react'
import Ribbon from '../app/Ribbon'
import Skill from './Skill'

class SkillsComponent extends React.Component {
  render() {
    return (
      <div className='SkillsComponent'>
        <Ribbon title='Skills'/>
        <div className='group1'>
          <Skill
            title='JavaScript / ES6'
            points={8.5} />
          <Skill
            title='React'
            points={7.1} />
        </div>
        <div className='group2'>
          <Skill
            title='HTML5'
            points={9.3} />
          <Skill
            title='CSS3 / Sass'
            points={8.1} />
        </div>
      </div>
    );
  }
}

export default SkillsComponent
