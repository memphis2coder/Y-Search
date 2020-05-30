import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';

function LandingPage() {
    return (
        <div>
        <Navbar />
            <div className="main">
                <SearchBar />
            </div>
        </div>
    );
};

export default LandingPage;