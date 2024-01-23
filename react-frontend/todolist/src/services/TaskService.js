
import axios from 'axios';

//Provides a way of using a component to consume an external service. Similar to Angular injectable services

/*const TASK_API_BASE_URL = "http://localhost:3000/api/tasks";

console.log(TASK_API_BASE_URL);*/

class TaskService
{
    getTasks()
    {
        const TASK_API_BASE_URL = "http://localhost:3000/api/tasks";
        
        return axios.get(TASK_API_BASE_URL);
        
        
    }
    createTask = (formData) =>
    {
        const TASK_API_CREATE_TASK = "http://localhost:3000/api/createTask";
        return axios.post(TASK_API_CREATE_TASK, formData /*{
            headers: {
                'Content-Type': 'application/json',
                },
            
            }*/);
       
    };
    getTaskById(taskId)
    {
        const TASK_API_EDIT_TASK = "http://localhost:3000/api/createTask";
        return axios.get(TASK_API_EDIT_TASK + '/' + taskId);
    }
    updateTask(task, taskId)
    {
        const TASK_API_EDIT_TASK = "http://localhost:3000/api/createTask";
         return axios.put(TASK_API_EDIT_TASK + '/' + taskId ,  task);
    }
    deleteTask(task,taskId)
    {
        const TASK_API_DELETE_TASK = "http://localhost:3000/api/createTask";
        return axios.delete(TASK_API_DELETE_TASK  + '/' + taskId , task);
    }

    //Gets the available statuses to be rendered for Create/Edit task drop-down
    getStatus = () =>
    {
        const TASK_API_GET_STATUSES = "http://localhost:3000/api/taskStatuses";
        return axios.get(TASK_API_GET_STATUSES);
    }

}

export default new TaskService();

