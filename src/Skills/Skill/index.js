import React from 'react'

class SkillComponent extends React.Component {


    plotCircles() {
        let out = []
        let circleRadius = 8
        let barWidth = 210

        // distance between 10 circle
        let step = (barWidth - circleRadius * 2) / 9

        // Iteration to get cx, x-axis coordinate
        for(let i = 0; i < 10; i++) {
            out.push(<circle cx={circleRadius + step * i} cy={circleRadius} r={circleRadius} key={i}/>)
        }
        return out

    }

    render() {
        return (
            <div className='SkillComponent'>
                <div className='title'>
                    {this.props.title}
                </div>

                <div className='rating'>
                    <svg>
                        <defs>
                            <clipPath id="clipping">
                                {this.plotCircles()}
                            </clipPath>
                        </defs>
                    </svg>

                    <div className="grey"></div>
                    <div className="fill"
                        style={{
                            width: 210 * this.props.points / 10
                        }}></div>
                    {/* calculation for fill of circles */}
                </div>

                <div className='points'>
                    {this.props.points}
                </div>
            </div>
        );
    }
}

export default SkillComponent
