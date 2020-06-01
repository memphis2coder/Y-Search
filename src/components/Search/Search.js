import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchResults from '../SearchResults/SearchResults';

// styles
import './Search.scss';

function Search() {
    return (
        <div className="search">
            <Navbar />
                <div className="container">
                    <SearchResults />
                </div>
        </div>
    );
};

export default Search;