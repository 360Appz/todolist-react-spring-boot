import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListTaskComponent from './components/ListTask';
import CreateTaskComponent from './components/CreateTask';
import ViewTaskComponent from './components/ViewTask';

function App() {
  return (

    <div>
      <Router>
        <div className='container'>
          <Route>
            <Route path="/" exact component = {ListTaskComponent}></Route>
            <Route path="/tasks" exact component = {ListTaskComponent}></Route>
            <Route path="/addTasks/:id" component = {CreateTaskComponent}></Route>
            <Route path="/editTasks" component = {ViewTaskComponent}></Route>
          </Route>
        </div>
      </Router>
    </div>


    /* 

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
      </header>
    </div> */
  );
}

export default App;
