import React from 'react'
import { Motion, spring } from 'react-motion'

class SkillComponent extends React.Component {

    plotCircles() {
        let out = []
        let circleRadius = 8
        let barWidth = 210

        // distance between 10 circle
        let step = (barWidth - circleRadius * 2) / 9

        // Iteration to get cx, x-axis coordinate
        for (let i = 0; i < 10; i++) {
            out.push(<circle cx={circleRadius + step * i} cy={circleRadius} r={circleRadius} key={i} />)
        }
        return out

    }

    plotRating() {
        let out = []
        out.push(
            <div className='rating' key='rating'>

                <svg>
                    <defs>
                        <clipPath id="clipping">
                            {this.plotCircles()}
                        </clipPath>
                    </defs>
                </svg>

                <div className="grey"></div>

                <Motion defaultStyle={{ x: 0 }} style={{ x: spring(1) }}>
                    {value =>
                        <div className="fill"
                            style={{
                                width: (210 * this.props.points / 10) * value.x
                            }}></div>
                    }
                </Motion>

            </div>
        )

        out.push(
            <Motion defaultStyle={{ x: 0 }} style={{ x: spring(1) }} key='points'>
                {value =>
                    <div className='points'>
                        {(this.props.points * value.x).toFixed(1)}
                    </div>
                }
            </Motion>
        )

        return out
    }

    plotYears() {
        let arrYears = [2015, 2016, 2017, 2018, 2019]
        return (
            <div className='years'>
                {arrYears.map((year, i) => (
                    <div key={i} className={
                        this.props.years.indexOf(year) != -1 ? 'active' : ''
                    }>{year}</div>
                ))}
            </div>
        )
    }

    render() {
        return (
            <div className='SkillComponent'>
                <div className='title'>
                    {this.props.title}
                </div>

                {this.props.showYears ?
                    this.plotYears()
                    :
                    this.plotRating()
                }

            </div>
        );
    }
}

export default SkillComponent
