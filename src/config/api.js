import queryString from 'query-string';
import {API_BASE_URL, BEARER_TOKEN } from './config';

export function get(path, queryParams) {
    //Parse a query string into an object. Leading ? or # are ignored, so you can pass location.search or location.hash directly.
    const query = queryString.stringify(queryParams);
    return fetch(`${API_BASE_URL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost', // project started on local server
            withCredential: true, // send authorization headers
        }
    })
};

