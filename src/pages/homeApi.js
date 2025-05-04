
import React, { useEffect, useState } from 'react';
import { getMaulidiData } from '../maulidapi'; // adjust path if needed

function Home({ toggleDarkMode, darkMode }) {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    getMaulidiData().then((data) => {
      setApiData(data);
    });
  }, []);

  return (
    <div>
      <h1>Welcome to FocusTube</h1>
      <button onClick={toggleDarkMode}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>

      <div>
        <h2>API Data:</h2>
        <pre>{apiData ? JSON.stringify(apiData, null, 2) : 'Loading...'}</pre>
      </div>
    </div>
  );
}

export default Home;
