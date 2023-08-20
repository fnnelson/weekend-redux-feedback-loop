import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";


export function SummaryPage() {

    const feedback = useSelector(store => store.feedbackData)
    const history = useHistory();

    const handleSubmit = () => {
        console.log("inside handleSubmit")

        let feedbackData = {
            feelingRating: feedback.feelingRating,
            understandingRating: feedback.understandingRating,
            supportedRating: feedback.supportedRating,
            comments: feedback.comments
        }

        axios.post('/feedback', feedbackData)
            .then(response => {
                // will have GET in here
                console.log("successful POST per server-side!", response);
                history.push('/success')
            })
            .catch(error => {
                console.error("error on POST:", error)
            })
    }

    return (
        <div>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {feedback.feelingRating}</p>
            <p>Understanding: {feedback.understandingRating} </p>
            <p>Support: {feedback.supportedRating}</p>
            <p>Comments: {feedback.comments}</p>
            <button onClick={handleSubmit}>SUBMIT</button>
        </div >
    )
}