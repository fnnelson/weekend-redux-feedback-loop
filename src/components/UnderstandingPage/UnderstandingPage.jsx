import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export function UnderstandingPage() {

    const dispatch = useDispatch();

    const history = useHistory();

    const [understandingRating, setUnderstandingRating] = useState('');

    const handleClick = () => {
        console.log("inside of handleClick()", understandingRating);
        if (understandingRating == '') {
            alert("Please enter a rating")
        } else {
            dispatch({ type: 'SET_UNDERSTANDING_RATING', payload: understandingRating });
            setUnderstandingRating('');
            // alert("you will now go to the supported page");
            history.push('/supported');
        }
    }

    return <div>
        <h1>How well are you understanding the content?</h1>
        <div className='main-content'>
            <p>1 = What content?</p>
            <p>2 = Not very well</p>
            <p>3 = Starting to understand some of it</p>
            <p>4 = Getting most of it</p>
            <p>5 = Complete understanding of material</p>
            <input type="number" min={1} max={5} value={understandingRating} onChange={(event) => setUnderstandingRating(event.target.valueAsNumber)} />
        </div>
        <div className='main-content'>
            <button onClick={handleClick}>NEXT</button>
        </div>
    </div>;

}