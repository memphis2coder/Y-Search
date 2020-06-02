import React from 'react';
import Title from '../Title/Title';
import SearchBar from '../SearchBar/SearchBar';
import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';


// styles
import './LandingPage.scss';

function LandingPage() {
    return (
        <div>
            <div className="landingPage">
                <Title />
                <SearchBar />
                <SearchSuggestions />
            </div>
        </div>
    );
};

export default LandingPage;