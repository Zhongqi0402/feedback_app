import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStat from "./components/FeedbackStat"
import FeedbackForm from "./components/FeedbackForm"
import {FeedbackContextProvider} from './context/FeedbackContext'

function App() {

    return (
        <FeedbackContextProvider>
            <Header />
            <div className='container'>
                <FeedbackForm />
                <FeedbackStat />
                <FeedbackList />
            </div>
        </FeedbackContextProvider>
        
        

    )
}

export default App


/* 
    1. can add in props like a parameter inside header tag and give them values in the component file
    2. Keeping feedback state in FeedbackStat because stats will change accourdlingly if feedback changes
    in the future
*/