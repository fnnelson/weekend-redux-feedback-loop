import React, { useState } from "react";
import { useDispatch } from "react-redux";

export function CommentPage() {

    const dispatch = useDispatch();

    const [comments, setComments] = useState('');

    const handleClick = () => {
        console.log("inside of handleClick()", comments);
        dispatch({ type: 'SET_COMMENTS', payload: comments });
        setComments('');
    }

    return <div>
        <h1>Any comments you want to leave?</h1>
        <p>(optional)</p>
        <div className='main-content'>
            <input type="text" value={comments} onChange={(event) => setComments(event.target.value)} />
        </div>
        <div className='main-content'>
            <button onClick={handleClick}>NEXT</button>
        </div>
    </div>;

}