import React from "react";
import { useSelector } from "react-redux";

export function SummaryPage() {

    const feedback = useSelector(store => store.feedbackData)

    return (
        <div>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {feedback.feelingRating}</p>
            <p>Understanding: {feedback.understandingRating} </p>
            <p>Support: {feedback.supportedRating}</p>
            <p>Comments: {feedback.comments}</p>
            {/* post goes here! */}
            <button>SUBMIT</button>
        </div>
    )
}