
import React, { Component, useState, useEffect } from 'react';
import TaskService from '../services/TaskService';
import { useNavigate } from 'react-router-dom';




// Create / Edit Page
function CreateTaskComponent ()
{
    const navigate = useNavigate(); //Navigation
    const [message, setMessage] =  useState('');//Display submission message
    const[statuses, showStatus] = useState([]); //Shows available task status

    const [formData, setFormData] = useState({
        taskName:"",
        taskDescription:"",
        taskStatus:"",
        dueDate:"",

    });

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
        const response = await TaskService.createTask(formData)
        {
            setMessage('Success: Data stored successfully');
            console.log(response.data);
        }

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
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value,

        });
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

                            <div className='form-group'>
                            <label>Task Description </label>
                            <textarea  name="taskDescription" className='form-control' value={formData.taskDescription} 
                                onChange={handleInput}/>
                            </div>

                            <div className='form-group'>
                            <label>Task Status </label>
                            
                            <select  name="taskStatus" className='form-control' value={formData.taskStatus}  onChange={handleInput} >
                                    <option value="" disabled selected>Select your option</option>
                                {statuses.map((status, index) => (
                                    
                                <option key={index} value={index}>{status}</option>                
                                ))};
                            </select>
                              
                            </div>

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
