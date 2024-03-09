// react-aplikacija/src/services/api.js

const axios = require('axios');

const fetchDataFromAPI = async () => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
        headers: {
            'X-RapidAPI-Key': 'fb1737a277msha39c0e321a04297p1099b6jsn56ec5312e530',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = { fetchDataFromAPI };
