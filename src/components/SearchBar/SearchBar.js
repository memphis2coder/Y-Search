import React from 'react';

import './SearchBar.scss';

function SearchBar() {
    return (
        <div className='search'>
            <div className="search-container container">
                <form>
                    <input type="text" placeholder="search"/>
                    <input type="text" placeholder="location"/>
                    <button>
                        search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;