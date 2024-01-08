











































































































































import React, {Component} from "react";
import TaskService from "../services/TaskService";


//List the Tasks feteched from database
class ListTaskComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            Tasks:[]

        }
        //Adds task details from this class
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);

    }
    deleteTask(id)
    {
        TaskService.deleteTask(id).then(
            res=> {this.setState({Tasks: this.state.Tasks.filter(Tasks=>Tasks.id !== id)});
            });
    }
    editTask(id)
    {
        this.props.history.push(`/addTask/${id}`);
    }
    viewTask(id)
    {
        this.props.history.push(`/viewTask/${id}`);
    }
    componentDidMount()
    {
        //Calls the Task Service class and fetches the API data
        TaskService.getTasks().then(
            (res)=> {
                this.setState({Tasks: res.data});
            });
    }
    addTask()
    {
        this.props.history.push(`/addTask/${id}`);
    }

    render()
    {
        return (
            <div>
                <h1 className="text-center">Task List</h1>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addTask}> Add Task</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Task Name</th>
                                <th> Task Description </th>
                                <th> Due Date</th>
                                <th> Task Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Tasks.map
                                (
                                    tasks =>
                                    <tr key= {tasks.id}>
                                        <td>{tasks.taskName}</td>
                                        <td>{tasks.taskDescription}</td>
                                        <td>{tasks.duedate}</td>
                                        <td>{tasks.taskStatus}</td>
                                        <td>
                                            <button onCLick={() => this.editTask(tasks.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.deleteTask(tasks.id)} className="btn btn-danger"></button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.viewTask(tasks.id)} className="btn btn-info"> View</button>
                                        </td>
                                    </tr>
                                )
        
                            }
                        </tbody>
                    </table>


                </div>
            </div>

        )
    }



}

export default ListTaskComponent