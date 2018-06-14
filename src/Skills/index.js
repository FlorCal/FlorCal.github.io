import React from 'react'
import Ribbon from '../app/Ribbon'
import Skill from '../app/Skill'

class SkillsComponent extends React.Component {
  render() {
    return (
      <div className='SkillsComponent'>
        <Ribbon title='Skills'/>
        <Skill />
      </div>
    );
  }
}

export default SkillsComponent
