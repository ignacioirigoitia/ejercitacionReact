import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from "./Components/ClassComponent";
import StatefullComponent from "./Components/StatefullComponent";
import Event from "./Components/Events"
import Hooks from './Components/Hooks';
import { useState } from 'react';

function App() {

  const [ title, setTitle ] = useState("");

  document.title = `${title}`

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hr />
        <input onChange={(e) => {setTitle(e.target.value)}}/>
        <hr/>
        <FunctionComponent
          name = "Penzio"
        />
        <hr/>
        <ClassComponent 
          date={new Date()}
        />
        <hr/>
        <StatefullComponent/>
        <hr/>
        <Event/>
        <hr/>
        <Hooks setTitle={setTitle} title={title}/>
      </header>
    </div>
  );
}

export default App;
