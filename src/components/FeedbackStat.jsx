import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStat( {feedback} ) {
    // calculate average feedback
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length
    // fix to 1 decimal place and remove trailing 0
    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className='feedback-stats'>
        <h4> {feedback.length} Reviews </h4>
        <h4> Average Rating: {isNaN(average) ? 0 : average} </h4> 
        </div>
    )
}

FeedbackStat.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStat
