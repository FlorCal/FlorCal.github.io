import React from 'react'

class SkillComponent extends React.Component {
  render() {
    return (
      <div className='SkillComponent'>
        <div className='title'>
          {this.props.title}
        </div>
        <div className='rating'>
          hgfjijs;ijgjgkjsk
        </div>
        <div className='points'>
          {this.props.points}
        </div>
      </div>
    );
  }
}

export default SkillComponent
