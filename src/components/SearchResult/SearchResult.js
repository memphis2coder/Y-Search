import React from 'react';

// styles
import './SearchResult.scss';

function SearchResult() {
    return (
        <div className="search-result">
            <div className="card">
            <img src="https://via.placeholder.com/150" alt="business "/>
                <div className="card--text">
                    <p className="card--title">Title</p>
                    <p className="card--rating">rating</p>
                    <p className="card--info">info</p>
                    <div className="card--rating">rating</div>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;