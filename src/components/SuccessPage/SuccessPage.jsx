import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export function SuccessPage() {

    const dispatch = useDispatch();

    const history = useHistory();

    const handleHome = () => {
        dispatch({ type: 'RESET_FEEDBACK' })
        alert("Feedback form reset. Sending back to home page")
        history.push('/')
    }

    return (
        <div>
            <h2>Feedback Submitted</h2>
            <h3>Thank You!</h3>
            <button onClick={handleHome}>Leave New Feedback</button>
        </div >
    )
}