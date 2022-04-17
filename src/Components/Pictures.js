import React, { useState, useEffect } from 'react';
import search from '../Images/search.svg';
import home from '../Images/home.svg'

function Pictures({ results }) {

    if (results.length === 0) {
        return <div className='empty-results'>
            <h1>Try typing something...</h1>
            <img src={home} alt="search img" />
        </div>
    }

    return (
        <div className="results">
            {results.map((item) => {
                console.log(item.id);
                return (
                    <div>
                        <a href={item.links.html} key={item.id} target='_blank'>
                            <img src={item.urls.regular} alt='val.alt_description' />
                        </a>
                    </div>
                )
            })}
        </div>

    )
}

export default Pictures