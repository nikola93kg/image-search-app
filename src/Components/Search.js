import React, { useState, useEffect } from 'react';
import Pictures from './Pictures'
import { FcSearch } from "react-icons/fc";
import Loading from './Loading';
const Access_Key = 'v3vgYrqy1l2qe-NKW4ESZ3GlhIorZouyhr8IHqwLan4';

function Search() {

    const [searchImg, setSearchImg] = useState("");
    const [imgData, setImgData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchRequest = async () => {
        const data = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${searchImg}&client_id=${Access_Key}&per_page=12`
        );
        const response = await data.json();
        const result = response.results;
        setImgData(result);
        setIsLoading(false)
    };

    useEffect(() => {
        fetchRequest();
    }, []);

    const submit = () => {
        fetchRequest();
        setSearchImg("");
        setIsLoading(true);
    };

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="search-container">
            <div className="search-box">
                <input type="text" placeholder="search photos from the unsplash.com" value={searchImg} onChange={(e) => setSearchImg(e.target.value)} />
                <button type='submit' onClick={submit}>
                    <FcSearch />
                </button>
            </div>
            <div className="display-box">
                <Pictures results={imgData} />
            </div>
        </div>
    )
}

export default Search