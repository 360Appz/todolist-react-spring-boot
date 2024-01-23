package com.example.todolist.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import java.security.PublicKey;
import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;

import com.example.todolist.model.taskStatus;
//Imports model, Exception handling, and repository;
import com.example.todolist.model.tasks;
import com.example.todolist.repository.TaskRepository;
import com.example.todolist.repository.TaskStatusRepository;
import com.example.todolist.ResourceNotFoundException;


@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TasksController {
	
	@Autowired
	private TaskRepository task_repository;
	
	@Autowired
	private TaskStatusRepository task_status_repository;
	
	
	//Get All Tasks
	@GetMapping("/tasks")
	public List<tasks> getAllTasks()
	{
		return task_repository.findAll();
	}
	
	//Get Task Statuses , to be rendered to create/edit drop down
	@GetMapping("/taskStatuses")
	public List<taskStatus> getAllTaskStatuses()
	{
		/*List<taskStatus> taskStatusList = task_status_repository.findAll();
		List<String> taskStatuses = new ArrayList<>();
		
		for(taskStatus status :  taskStatusList)
		{
			taskStatuses.add(status.getStatus());
		}
		
		return taskStatuses;*/
		//System.out.println(task_status_repository.findAll());
		return task_status_repository.findAll();

	}
	
	//Create Task
	@PostMapping("/createTask")
	public @ResponseBody String createTasks(@RequestBody tasks formData)
	{
		tasks task = new tasks();
		task.setTaskName(formData.getTaskName());
		task.setDescription(formData.getDescription());
		task.setStatus(formData.getStatus());
		task.setDate(formData.getDate());
		
				
		//Set Current Timestamp
		LocalDateTime currentDateTime = LocalDateTime.now();
		Timestamp currentTimestamp = Timestamp.valueOf(currentDateTime);
		task.setTimestamp(currentTimestamp);
		
		System.out.println("Received formData - task_name: " + formData.getTaskName());
	    System.out.println("Received formData - description: " + formData.getDescription());
	    System.out.println("Received formData - statusId: " + formData.getStatus());
	    System.out.println("Received formData - date: " + formData.getDate());
		task_repository.save(task);
		
		return "task are save";
		
	}
	/*@PostMapping("/createTask")
	public @ResponseBody String createTasks(
	    @RequestParam String taskName,
	    String description,
	    @RequestParam Long status,  // Change the parameter type to Long for status ID
	    @RequestParam Date dueDate
	) {
		
		System.out.println("Received formData - task_name: " + taskName);
	    tasks task = new tasks();
	    task.setTaskName(taskName);
	    task.setDescription(description);
	    
	    // Fetch the taskStatus entity using the provided status ID
	    taskStatus statusEntity = task_status_repository.findById(status).orElseThrow();
	    
	    task.setStatus(statusEntity);
	    task.setDate(dueDate);
	    
	  
	    System.out.println("Received formData - description: " + description);
	    System.out.println("Received formData - status: " + status);
	    System.out.println("Received formData - date: " + dueDate);
	    
	    //task.setTimeStamp(1, Timestamp.valueOf(LocalDateTime.now()));
	    //task_repository.save(task);
	    
	    return "task are save";
	}*/
	
	
	 
	 
	
	
	//Update Task Function
	/*@PutMapping("/editTask/{id}")
	public ResponseEntity<tasks> updateTasks(@PathVariable Long id, @RequestBody tasks taskDetails)
	{
		tasks task = task_repository.findById(id).orElseThrow(
				()-> new ResourceNotFoundException("Task not exist with id :" + id));
		
		task.setTaskName(taskDetails.getTaskName());
		task.setDescription(taskDetails.getDescription());
		task.setStatusNumber(taskDetails.getStatusNumber());
		task.setDate(taskDetails.getDate());
		
		tasks update_task = task_repository.save(task);
		return ResponseEntity.ok(update_task);
	}*/
	
	//Delete Task Function
	@DeleteMapping("/deleteTask/{id}")
	public ResponseEntity<Map <String, Boolean>> deleteTasks(@PathVariable Long id)
	{
		tasks task = task_repository.findById(id).orElseThrow(
				()-> new ResourceNotFoundException("Task not exist with id :" + id));
		
		task_repository.delete(task);
		Map<String, Boolean> response = new HashMap <> ();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
		
	

}
