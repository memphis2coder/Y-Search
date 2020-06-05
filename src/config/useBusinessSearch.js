import {useState, useEffect} from 'react';
import * as api from './api';

// useState to store businesses, amountResults, searchParams
// useEffect to connect to api
// return businesses, amountResults, searchParams, setSearchParams

export function useBusinessSearch(term, location) {
    const [businesses, setBusinesses] = useState([]); // empty array store businesses
    const [amountResults, setAmountResults] = useState(); // store amount of results
    const [searchParams, setSearchParams] = useState({term, location}); // we need this to do repeated search

    // useEffect hooks to connect to a network
    useEffect(() => {
        setBusinesses([]); // clear search after getting result
        const fetchData = async () => {
            try {
                const rawData = await api.get('/businesses/search', searchParams);
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
                setAmountResults(resp.total)
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [businesses, amountResults, searchParams, setSearchParams];
};