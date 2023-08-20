import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export function FeelingPage() {

    const dispatch = useDispatch();

    const history = useHistory();

    const [feelingRating, setFeelingRating] = useState('');

    const handleClick = () => {
        console.log("inside of handleClick()", feelingRating);
        if (feelingRating == '') {
            alert("Please enter a rating")
        } else {
            dispatch({ type: 'SET_FEELING_RATING', payload: feelingRating });
            setFeelingRating('');
            // alert("you will now go to the understanding page");
            history.push('/understanding');
        }
    }

    return <div>
        <h1>How are you feeling today?</h1>
        <div className='main-content'>
            <p>1 = Terrible</p>
            <p>2 = Struggling</p>
            <p>3 = Decent</p>
            <p>4 = Good</p>
            <p>5 = Amazing</p>
            <input type="number" min={1} max={5} value={feelingRating} onChange={(event) => setFeelingRating(event.target.valueAsNumber)} />
        </div>
        <div className='main-content'>
            <button onClick={handleClick}>NEXT</button>
        </div>
    </div>;
}
