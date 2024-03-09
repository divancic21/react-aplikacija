// services/api.js
import axios from 'axios';

const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3/timezone';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-key': 'fb1737a277msha39c0e321a04297p1099b6jsn56ec5312e530',
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
  }
});


