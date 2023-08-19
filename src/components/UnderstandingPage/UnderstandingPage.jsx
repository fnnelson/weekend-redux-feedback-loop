import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function UnderstandingPage() {

    const dispatch = useDispatch();

    const [understandingRating, setUnderstandingRating] = useState('');

    const handleClick = () => {
        console.log("inside of handleClick()", understandingRating);
        dispatch({ type: 'SET_UNDERSTANDING_RATING', payload: understandingRating });
        setUnderstandingRating('');
    }

    return <div>
        <h1>How well are you understanding the content?</h1>
        <div className='main-content'>
            <p>1 = What content?</p>
            <p>2 = Not very well</p>
            <p>3 = Getting a few things</p>
            <p>4 = Starting to get it</p>
            <p>5 = Full understanding of the content</p>
            <input type="number" min={1} max={5} value={understandingRating} onChange={(event) => setUnderstandingRating(event.target.valueAsNumber)} />
        </div>
        <div className='main-content'>
            <Link to='/supported'>
                <button onClick={handleClick}>NEXT</button>
            </Link>
        </div>
    </div>;

}