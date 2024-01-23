import React, { Component, useEffect, useState } from 'react'
import TaskService from '../services/TaskService'
import { useNavigate } from 'react-router-dom';





//Default Page, List all task, if there is
function ListTaskComponent() {
    const[tasks, setTasks] = useState([]);

    const navigate = useNavigate(); //Navigation



    const getTasks = () =>
    {
        TaskService.getTasks().then((res) => 
        {
            console.log(res.data);
            setTasks(res.data);
          
        });
    };

    const editTasks = (id) =>
    {

    };
    const deleteTasks = (id) =>
    {

    };

    useEffect(() => {
        getTasks();

    }, [])

    // Direct to Add Task Page
    const addTask = () => {
   
        navigate('/addTasks');
        
    };

    
    return (
            <div>
                 <h2 className="text-center">To Do List</h2>   
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Task Name</th>
                                    <th> Description</th>
                                    <th> Status</th>
                                    <th> Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (

                                        <tr key = {task.id}>
                                             <td> {task.taskName} </td>   
                                             <td> {task.description}</td>
                                             <td> {task.status.status}</td>
                                             <td> {task.dueDate}</td>
                                             <td>
                                                 <button onClick={ () => this.editTask(task.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTask(task.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTask(task.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>

                                    ))}
                            </tbody>
                        </table>

                 </div>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={addTask}> Add Task</button>
                 </div>

            </div>
    );
    
}

export default ListTaskComponent;

/*
class ListTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tasks: []
        }
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(id){
        TaskService.deleteTask(id).then( res => {
            this.setState({tasks: this.state.tasks.filter(task => task.id !== id)});
        });
    }
    viewTask(id){
        this.props.history.push(`/view-task/${id}`);
    }
    editTask(id){
        this.props.history.push(`/editTask/${id}`);
    }

    componentDidMount(){
        TaskService.getTasks().then((res) => {
            this.setState({ tasks: res.data});
        });
    }

    // Direct to Add Task Page
    addTask() {
   
        this.props.navigate(`/addTasks`);
        
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">To Do List</h2>   
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Task Name</th>
                                    <th> Description</th>
                                    <th> Status</th>
                                    <th> Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tasks.map(
                                        task => 
                                        <tr key = {task.id}>
                                             <td> { task.taskName} </td>   
                                             <td> {task.taskDescription}</td>
                                             <td> {task.taskStatus}</td>
                                             <td> {task.duedate}</td>
                                             <td>
                                                 <button onClick={ () => this.editTask(task.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTask(task.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTask(task.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTask}> Add Task</button>
                 </div>

            </div>
        )
    }
}

export default withNavigate(ListTaskComponent);

*/



































































































































