import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"
import { useState } from 'react'
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStat from "./components/FeedbackStat"
import FeedbackForm from "./components/FeedbackForm"
import { v4 as uuidv4 } from 'uuid'


function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure to delete?")) {
            setFeedback(feedback.filter((item) => item.id != id))
        }
        
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }



    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStat feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
        
        

    )
}

export default App


/* 
    1. can add in props like a parameter inside header tag and give them values in the component file
    2. Keeping feedback state in FeedbackStat because stats will change accourdlingly if feedback changes
    in the future
*/