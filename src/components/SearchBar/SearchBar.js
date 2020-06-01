import React from 'react';

import './SearchBar.scss';

function SearchBar() {
    return (
        <div className='search'>
            <div className="container notification">
                <div className="field has-addons">
                    <p className="control">
                        <button className="button is-small">Search</button>
                    </p>
                    <p className="control">
                        <input className="input is-small" type="text" placeholder="burger, pizza, taco" />
                    </p>
                    <p className="control">
                        <button className="button is-small">Near</button>
                    </p>
                    <p className="control">
                        <input class="input is-small" type="text " placeholder="location" />
                    </p>
                    <p className="button is-danger is-small">
                        <span className="icon is-small">
                            <i class="fas fa-search"></i>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;


