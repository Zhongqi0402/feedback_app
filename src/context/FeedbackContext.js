import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext();

export const FeedbackContextProvider = ({children}) => {
    // The actual sample data 
    const [feedback, setFeedback] = useState(
        [
            {
              id: 1,
              rating: 10,
              text: 'This is sample feedback 1.',
            },
            {
              id: 2,
              rating: 9,
              text: 'This is sample feedback 2.',
            },
            {
              id: 3,
              rating: 8,
              text: 'This is sample feedback 3.',
            },
          ]
    )

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })


    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    const updateFeedback = (id, updItem) => {
        //setFeedbackEdit({updItem, edit: false,})
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item ))
        setFeedbackEdit({
            item: {},
            edit: false,
        })
        
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext