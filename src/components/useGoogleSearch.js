
import React, { useEffect, useState } from 'react';
import API_KEY from '../Keys';
import Error from './Error';
import { render } from '@testing-library/react';

//This is the custom search engine Google is going to use. 
//https://cse.google.com/cse/create/new
const CONTEXT_KEY = 'contextkey';

//Building our custom Hook
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }
        fetchData();
    }, [term]);

    return { data };

};

export default useGoogleSearch;