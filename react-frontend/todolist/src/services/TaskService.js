
import axios from 'axios';

//Provides a way of using a component to consume an external service. Similar to Angular injectable services

const TASK_API_BASE_URL = "http://localhost:3000/api/tasks";

console.log(TASK_API_BASE_URL);

class TaskService
{
    getTasks()
    {
        return axios.get(TASK_API_BASE_URL);
    }
    createTask = (formData) =>
    {
        const TASK_API_CREATE_TASK = "http://localhost:3000/api/createTask";
        return axios.post(TASK_API_CREATE_TASK, formData);
    }
    getTaskById(taskId)
    {
        return axios.get(TASK_API_BASE_URL + '/' + taskId);
    }
    updateTask(task, taskId)
    {
         return axios.put(TASK_API_BASE_URL + '/' + taskId ,  task);
    }
    deleteTask(task,taskId)
    {
        return axios.delete(TASK_API_BASE_URL + '/' + taskId , task);
    }

    //Gets the available statuses to be rendered for Create/Edit task drop-down
    getStatus = () =>
    {
        const TASK_API_GET_STATUSES = "http://localhost:3000/api/taskStatuses";
        return axios.get(TASK_API_GET_STATUSES);
    }

}

export default new TaskService();

