
import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class CreateTaskComponent extends Component
{
    constructor(props)
   {
    this.state = {
        id: this.props.match.params.id, //Retrieves id from API route
        taskName: "",
        taskDescription:"",
        taskStatus:"",
        dueDate:""
    }
    this.changeTaskNameHandler = this.changeTaskNameHandler.bind(this);
    this.changeTaskDescriptionHandler = this.changeTaskDescriptionHandler.bind(this);
    this.changeStatusHandler = this.changeStatusHandler.bind(this);
    this.changeDueDateHandler = this.changeDueDateHandler.bind(this);
    this.saveOrUpdateTask = this.saveOrUpdateTask.bind(this);
   }

   componentDidMount()
   {
     if(this.state.id === '_add')
     {
        return
     }
     else{
        TaskService.getTaskById(this.state.id).then(
            (res) => {
                let task = res.data;
                this.setState({taskName : task.taskName, taskDescription : task.taskDescription, taskStatus: task.taskStatus, dueDate : task.dueDate})
            }
        )
     }
   }
   saveOrUpdateTask = (e) =>
   {
      e.preventDefault();
      let task = { taskName:this.state.taskName, taskDescription : this.state.taskDescription,
    taskStatus : this.state.taskStatus, dueDate : this.state.dueDate  };
     console.log(`task =>` + JSON.stringify(task));

     if(this.state.id == "_add")
     {
        TaskService.createTask(task).then (
            res => {this.props.history.push('/tasks');}
        );
     }
     else{
        TaskService.updateTask(task, this.state.id).then(
            res => {
                this.props.history.push('/tasks');
            }
        )
     }
   }
   changeTaskNameHandler = (event) =>
   {
    this.setState({taskName : event.target.value});
   }
   changeTaskDescriptionHandler = (event) =>
   {
    this.setState({taskDescription : event.target.value});
   }

   changeStatusHandler = (event) =>
   {
    this.setState({taskStatus: event.target.value});
   }
   changeDueDateHandler = (event) =>
   {
    this.setState({dueDate: event.target.value});
   }
   cancel()
   {
     this.props.history.push('/tasks');
   }
   getTitle()
   {
     if(this.state.id === "_add")
     {
        return <h3 className='text-center'> Add Task</h3>
     }
     else
     {
        return <h3 className='text-center'> Return Task</h3>
     }
   }

   render()
   {
    return (
        <div>
            <br></br>
            <div className='container'>
                <div className='row'>
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                    {
                        this.getTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>Task Name </label>
                                <input placeholder='Task Name' name="taskName" className='form-control' value={this.state.taskName} 
                                onChange={this.changeTaskNameHandler}/>

                            </div>

                            <div className='form-group'>
                            <label>Task Description </label>
                            <input placeholder='Task Description' name="taskDescription" className='form-control' value={this.state.taskDescription} 
                                onChange={this.changeTaskDescriptionHandler}/>
                            </div>

                            <div className='form-group'>
                            <label>Task Status </label>
                            <input placeholder='Task Status' name="taskStatus" className='form-control' value={this.state.taskStatus} 
                                onChange={this.changeStatusHandler}/>
                            </div>

                            <div className='form-group'>
                            <label>Due Date </label>
                            <input type="date" placeholder='Due Date' name="dueDate" className='form-control' value={this.state.dueDate} 
                                onChange={this.dueDate}/>
                            </div>

                        </form>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
   }

}

export default CreateTaskComponent
