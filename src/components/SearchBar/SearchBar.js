import React, {useState} from 'react';

import './SearchBar.scss';

function SearchBar(props) {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    // form submit
    function submit(e) {
        e.preventDefault();
        console.log(term, location)
    };

    return (
        <form onSubmit={submit}>
            <div className='search'>
                <div className="container notification">
                    <div className="field has-addons">
                        <div className="control">
                            <div className="button is-small">Search</div>
                        </div>
                        <p className="control">
                            <input className="input is-small"
                                onChange={(e) => setTerm(e.target.value)}
                                type="text" 
                                placeholder="burger, pizza, taco" />
                        </p>
                        <div className="control">
                            <div className="button is-small">Near</div>
                        </div>
                        <p className="control">
                            <input className="input is-small" 
                                onChange={(e) => setLocation(e.target.value)}
                                type="text " 
                                placeholder="location" />
                        </p>
                        <button type="submit" className="button is-danger is-small" onClick={submit}>
                            <span className="icon is-small">
                                <i className="fas fa-search"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SearchBar;


