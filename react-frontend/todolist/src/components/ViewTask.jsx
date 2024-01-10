
import React, {Component} from  'react'
import TaskService from '../services/TaskService'

class ViewTaskComponent extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            task : {}
        }
    }
    componentDidMount()
    {
        TaskService.getTaskById(this.state.id).then
        (
            res => {
                this.setState({task : res.data});
            }
        )
    }
    render()
    {
        return (
            <div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> Task Details</h3>
                <div className = "card-body">
                    <div className = "row">
                        <label> Task Name </label>
                        <div> { this.state.task.taskName }</div>
                    </div>
                    <div className = "row">
                        <label> Task Description</label>
                        <div> { this.state.task.taskDescription }</div>
                    </div>
                    <div className = "row">
                        <label> Task Status </label>
                        <div> { this.state.task.taskStatus}</div>
                    </div>
                    <div className="row">
                        <label>Due Date </label>
                        <div> { this.state.task.dueDate }</div>
                    </div>
                </div>

            </div>
            </div>
        )
    }

}

export default ViewTaskComponent