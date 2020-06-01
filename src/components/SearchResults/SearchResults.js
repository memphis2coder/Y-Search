import React from 'react';
import SearchResult from '../SearchResult/SearchResult';

// styles
import "./SearchResults.scss";

function SearchResults() {
    return (
        <div className="search-results">
            <SearchResult />
            <SearchResult />
        </div>
    );
};

export default SearchResults;