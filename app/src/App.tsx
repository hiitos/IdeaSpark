import React, { useEffect , useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchTest } from './features/data';

function App() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchTest("test").then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {data}
        </p>
      </header>
    </div>
  );
}

export default App;
