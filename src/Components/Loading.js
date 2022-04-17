import React from 'react'
import loading from '../Images/inf-loading.svg';

function Loading() {
    return (
        <div className='loading-container'>
            <img src={loading} alt="please wait" />
        </div>
    )
}

export default Loading