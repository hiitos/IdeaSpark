import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchTest } from './features/data';

interface ResponseData {
  status: number;
  body: string; // `body`はJSON文字列を受け取る
}

function App() {
  const [data, setData] = useState<ResponseData | null>(null);

  useEffect(() => {
    fetchTest("test").then((data) => {
      // console.log(data);
      const responseData = data as ResponseData;
      setData(responseData);
      // console.log(responseData.body);
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
        {/* JSON文字列をパースしてリストとして表示 */}
        <ul>
          {data ? JSON.parse(data.body).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          )) : 'Loading...'}
        </ul>
      </header>
    </div>
  );
}

export default App;
