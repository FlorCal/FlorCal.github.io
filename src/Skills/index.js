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
            points={7.5} />
          <Skill
            title='React'
            points={7.1} />
          <Skill
            title='jQuery'
            points={6.2} />
          <Skill
            title='D3 / SVG'
            points={4.5} />
          <Skill
            title='Node / Express'
            points={3.9} />
        </div>
        <div className='group2'>
          <Skill
            title='HTML5'
            points={9.3} />
          <Skill
            title='CSS3 / Sass'
            points={8.1} />
          <Skill
            title='Git / GitHub'
            points={5.2} />
          <Skill
            title='Scrum / Trello'
            points={9.1} />
          <Skill
            title='Sketch / Design'
            points={6.5} />
        </div>
      </div>
    );
  }
}

export default SkillsComponent
