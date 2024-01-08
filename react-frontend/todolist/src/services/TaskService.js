
import axios from 'axios';

//Provides a way of using a component to consume an external service. Similar to Angular injectable services

const TASK_API_BASE_URL = "http://localhost:3000/api/v1/tasks";

class TaskService
{
    getTasks()
    {
        return axios.get(TASK_API_BASE_URL);
    }
    createTask(task)
    {
        return axios.post(TASK_API_BASE_URL, task);
    }
    getTaskById(taskId)
    {
        return axios.get(TASK_API_BASE_URL + '/' + taskId);
    }
    updateTask(task, taskId)
    {
         return axios.put(TASK_API_BASE_URL + '/' + taskId +  task);
    }
    deleteTask(task,taskId)
    {
        return axios.delete(TASK_API_BASE_URL + '/' + taskId + task);
    }

}

export default new TaskService();

