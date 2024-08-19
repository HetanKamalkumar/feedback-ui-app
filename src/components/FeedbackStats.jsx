import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
    //Calculate Ratings avg
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/,'')

  return  (
    <div className="feedback-stats">
    {/* Conditionally render 'Review' if feedback.length is 1, otherwise 'Reviews' */}
    <h4>{feedback.length} {feedback.length === 1 ? 'Review' : 'Reviews'}</h4>
    <h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
  </div>

  ) 
}



export default FeedbackStats