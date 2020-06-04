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
function Search() {
    // pass down the current term and location to searchResults
    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc')
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);
    
    return (
        <div className="search">
            <div className="container">
                <Link to='/'><Title /></Link>
            </div>
            <SearchBar term={term} location={locationParam} />
                <div className="container">
                    <SearchResults term={term} location={locationParam} businesses={businesses}/>
                </div>
        </div>
    );
};

export default Search;