import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPostsRequest } from './services/posts';
import { CustomTable } from './pages/CustomTable';

function App() {
  // Lifecycle method
  useEffect(() => {
    // getPostRequest();
  }, []);

  // get post data from api
  const getPostRequest = async () => {
    const result = await getPostsRequest();
    try {
      if (result) {
        console.log('result :>>', result);
        return result;
      }
    } catch (error) {
      console.log('Error :>>', error);
    }
  };

  return (
    <div className="App">
      <CustomTable />
    </div>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
