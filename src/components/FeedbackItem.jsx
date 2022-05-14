import { FaTimes, FaEdit } from 'react-icons/fa'
import React, { useState } from 'react'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackItem( {item} ) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)




    return (
        <Card>
            <div className='num-display'> {item.rating} </div>
            <button className="close" onClick={() => deleteFeedback(item.id)}>
                <FaTimes color='purple'/>
            </button>
            <button onClick={() => editFeedback(item)} className='edit'>
                <FaEdit color="purple" />
            </button>
            <div className='text-display'>  {item.text} </div>

        
        </Card>
    )
}

export default FeedbackItem


/*
    1. state is a built-in object to store information and data about a component.
    2. We could add a button and define a new function to define usage of that button.
*/