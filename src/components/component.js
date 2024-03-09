// components/ExampleComponent.js
import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/api'; // Uvoz funkcije fetchData iz api.js

const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          {/* Prikaz podataka */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ExampleComponent;
