import React from 'react'

class RibbonComponent extends React.Component {
  render() {
    return (
      <div className='RibbonComponent'>
        <div className='title'>
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default RibbonComponent
