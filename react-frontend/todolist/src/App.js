import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListTaskComponent from './components/ListTask';
import CreateTaskComponent from './components/CreateTask';
import ViewTaskComponent from './components/ViewTask';
import EditTaskComponent from './components/EditTask';

function App() {
  return (

    <div>
      <Router>
        <div className='container'>
          <Routes>
            <Route path="/" element= {<ListTaskComponent/>}></Route>
            <Route path="/tasks" element = {<ListTaskComponent/>}></Route>
            <Route path="/addTasks" element = {<CreateTaskComponent/>}/>
            <Route path="/editTask/:id" element = {<EditTaskComponent/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
