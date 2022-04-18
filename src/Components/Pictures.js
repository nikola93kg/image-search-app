import React from 'react';
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
                return (
                    <div key={item.id}>
                        <a href={item.links.html} target='_blank' rel="noopener noreferrer">
                            <img src={item.urls.regular} alt='val.alt_description' />
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default Pictures