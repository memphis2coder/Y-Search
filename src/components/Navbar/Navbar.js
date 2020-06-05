import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';


// styles
import './Navbar.scss';

function Navbar(props) {
    return (
        <div className="navi">
            {/* <Link to='/'><img src={logo} alt="logo" style={{padding: "10px", cursor: "pointer"}}/></Link> */}
            <SearchBar/>
        </div>
    )
};

export default Navbar;