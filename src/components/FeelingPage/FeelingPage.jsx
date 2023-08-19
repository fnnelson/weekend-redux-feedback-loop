import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export function FeelingPage() {

    const dispatch = useDispatch();

    const [feelingRating, setFeelingRating] = useState('');

    const handleClick = () => {
        console.log("inside of handleClick()", feelingRating);
        dispatch({ type: 'SET_FEELING_RATING', payload: feelingRating });
        setFeelingRating('');
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
            <Link to='/understanding'>
                <button onClick={handleClick}>NEXT</button>
            </Link>
        </div>
    </div>;
}
