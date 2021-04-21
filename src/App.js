import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from "./Components/ClassComponent";
import StatefullComponent from "./Components/StatefullComponent";
import Event from "./Components/Events"

function App() {
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
      </header>
    </div>
  );
}

export default App;
