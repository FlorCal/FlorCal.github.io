// libraries
import React from 'react'



class ScrollComponent extends React.Component {

    onScrollClick() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    render() {
        return(
            <div className='ScrollComponent'
                onClick={this.onScrollClick.bind(this)}>
            </div>
        );
    }
}

export default ScrollComponent
