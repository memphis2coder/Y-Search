import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import useReactRouter from 'use-react-router';
import {Link} from 'react-router-dom';
import {useBusinessSearch} from '../../config/useBusinessSearch';
import Title from '../Title/Title';
// styles
import './Search.scss';


// search webpage
function Search(props) {
    // pass down the current term and location to searchResults
    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc')
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);
    
    // function to make searchbar work in search page
    function search(term,location) {
        // require input fields 
        if (term.length === 0 || location.length === 0) {
            alert("Please fill out all fields")
        }
        
        // redirect the user to update https
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`)
        setSearchParams({term, location})

        
    }



    return (
        <div className="search">
            <div className="container">
                <Link to='/'><Title /></Link>
            </div>
            <SearchBar term={term} location={locationParam} search={search}/>
                <div className="container">
                    <SearchResults term={term} 
                                location={locationParam} 
                                businesses={businesses} 
                                amountResults={amountResults}
                    />
                </div>
        </div>
    );
};

export default Search;