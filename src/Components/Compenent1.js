import React, { useEffect, useState } from 'react';
import { fetchDataFromAPI } from '../services/api.js'; // Pretpostavljajući da se api.js nalazi u mapi services

const MyComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiData = await fetchDataFromAPI();
                setData(apiData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    // Ostatak komponente...
};
