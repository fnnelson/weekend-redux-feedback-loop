import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export function SupportedPage() {

    const dispatch = useDispatch();

    const history = useHistory();

    const [supportedRating, setSupportedRating] = useState('');

    const handleClick = () => {
        console.log("inside of handleClick()", supportedRating);
        if (supportedRating == '') {
            alert("Please enter a rating")
        } else {
            dispatch({ type: 'SET_SUPPORTED_RATING', payload: supportedRating });
            setSupportedRating('');
            // alert("you will now go to the comment page")
            history.push('/comment')
        }


    }

    return <div>
        <h1>How well are you being supported?</h1>
        <div className='main-content'>
            <p>1 = Gym bleachers</p>
            <p>2 = Old wooden chair</p>
            <p>3 = Cushiony bar stool with a low back</p>
            <p>4 = Cubicle office chair</p>
            <p>5 = La-Z-Boy reclined with the leg-rest kicked out</p>
            <input type="number" min={1} max={5} value={supportedRating} onChange={(event) => setSupportedRating(event.target.valueAsNumber)} />
        </div>
        <div className='main-content'>
            <button onClick={handleClick}>NEXT</button>
        </div>
    </div>;

}