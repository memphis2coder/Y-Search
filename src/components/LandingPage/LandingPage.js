import React from 'react';
import useReactRouter from 'use-react-router';
import Title from '../Title/Title';
import SearchBar from '../SearchBar/SearchBar';
import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';

// styles
import './LandingPage.scss';

function LandingPage() {
    const {history} = useReactRouter(); // redirect user after form submit  
    // callback function to searchBar
    function search(term, location) {
        const urlEncodedTerm = encodeURI(term); // trick to make search terms with spaces work
        const urlEncodedLocation = encodeURI(location); // trick to make search location with spaces work
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
    };

    return (
        <div>
            <div className="landingPage">
                <Title />
                <SearchBar search={search}/>
                <SearchSuggestions />
            </div>
        </div>
    );
};

export default LandingPage;