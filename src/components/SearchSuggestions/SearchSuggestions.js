import React from 'react';
import './SearchSuggestions.scss';

function SearchSuggestions() {
    return (
        <div className="searchSuggestions">
            <div className="container">

                <span className="icon is-small">
                    <i class="fas fa-utensils"></i>
                </span>
                <span className="suggestion">
                    Resturants
                </span>
                
                <span className="icon is-small">
                    <i class="fas fa-truck"></i>
                </span>
                <span className="suggestion">
                    Delivery
                </span>

            </div>
        </div>
    )
};

export default SearchSuggestions;