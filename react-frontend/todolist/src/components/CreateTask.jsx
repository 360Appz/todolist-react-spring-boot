
import React, { Component, useState, useEffect } from 'react';
import TaskService from '../services/TaskService';
import { useNavigate } from 'react-router-dom';




// Create / Edit Page
function CreateTaskComponent ()
{
    const navigate = useNavigate(); //Navigation
    const [message, setMessage] =  useState('');//Display submission message, and error if there is
    const[statuses, showStatus] = useState([]); //Shows available task status

    const [formData, setFormData] = useState({
        taskName:"",
        description:"",
        status: "",
        dueDate:"",

    });

    //Renders status types to form
    const getStatuses = () =>
    {
        TaskService.getStatus().then((res) => 
        {
            showStatus(res.data);
            //console.log(res.data);
        });
    };

 
   const createTask =  async (e) =>
   {
      e.preventDefault(); //Prevent reload page when form submission

      try
      {
        console.log(formData);
        const response = await TaskService.createTask(formData) 
        setMessage('Success: Data stored successfully');
        console.log(response.data, formData);
        

      }
      catch(error)
      {
        setMessage('Error: Failed to store data');
        console.error(error);
      }
     
    
   };
   
   const cancel = () =>
   {
        navigate('/');
   };

   const handleInput = (e) =>
   {
        // Since e.target.value is a string, you need to convert it to a number
        const {name, value} = e.target;

        if(name === "status")
        {
            const statusId = Number(value);
            setFormData({
                ...formData,
                status:{id:statusId}, //Sets status instead of object, as spring boot expects an object
    
            });
        }
        else {
        setFormData({
            ...formData,
            [name]:value,

        });
        }
   };

   //Display statuses
   useEffect(() => {
    getStatuses();

    }, []);
   
   
    return (
        <div>
            <br></br>
            <div className='container'>
                <div className='row'>
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                  
                    <div className='card-body'>
                        <form onSubmit={createTask} method='POST'>
                            <div className='form-group'>
                                <label>Task Name </label>
                                <input  name="taskName" className='form-control' value={formData.taskName} 
                                onChange={handleInput}/>

                            </div>
                            <br/>

                            <div className='form-group'>
                            <label>Task Description </label>
                            <textarea  name="description" className='form-control' value={formData.description} 
                                onChange={handleInput}/>
                            </div>

                            <br/>

                            <div className='form-group'>
                            <label>Task Status </label>                          
                            <select  name="status" className='form-control' value={formData.status.id}  onChange={handleInput} >
                                    
                                {statuses.map((status) => (
                                   // console.log(statuses),
                                <option  value={status.id}>{status.status}</option>                
                                ))};
                            </select>                             
                            </div>

                            <br/>

                            <div className='form-group'>
                            <label>Due Date </label>
                            <input type="date"  name="dueDate" className='form-control' value={formData.dueDate} 
                                onChange={handleInput}/>
                            </div>
                            <p></p>
                            <div>
                                <p>
                        <button type='submit' className='btn btn-primary' onClick={createTask}> Create Task</button>
                        <button type='button' className='btn btn-danger' onClick={cancel}> Cancel</button>
                        </p>
                        </div>
                        </form>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
   

}

export default CreateTaskComponent;
