import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackStat() {
    const {feedback} = useContext(FeedbackContext)

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


export default FeedbackStat
