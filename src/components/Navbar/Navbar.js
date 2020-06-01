import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

// styles
import './Navbar.scss';

function Navigation() {
    return (
        <div className="navi">
            <SearchBar />
        </div>
    )
};

export default Navigation;