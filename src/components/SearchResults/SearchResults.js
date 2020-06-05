import React from 'react';
import SearchResult from '../SearchResult/SearchResult';

// styles
import "./SearchResults.scss";

function SearchResults(props) {
    // if no business is found return nothing
    if(!props.businesses || !props.businesses.length) {
        return (<div></div>)
    }

    // map through the data
    const searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b} />)

    return (
        <div className="search-results">
            <div className="container">
                <span>
                    <strong>{props.term}</strong></span>, 
                    <span>{props.location}
                </span>
            </div>
            {searchResults}
        </div>
    );
};

export default SearchResults;