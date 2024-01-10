package com.example.todolist;



import java.sql.Timestamp;
import java.util.Date;
import java.util.concurrent.CompletableFuture.AsynchronousCompletionTask;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.todolist.model.taskStatus;
import com.example.todolist.model.tasks;
import com.example.todolist.repository.TaskRepository;
import com.example.todolist.repository.TaskStatusRepository;

import java.time.LocalDateTime;

@SpringBootApplication
public class TodolistApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodolistApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner taskStatus(TaskStatusRepository taskStatusRepository)
	{
		return (args) ->
		{
		  /*tasks task1 = new tasks("Task 1", "Description 1", 1, new Date());
		  tasks task2 = new tasks("Task 2", "Description 2", 3 , new Date());
		  
		// Set current timestamp
          LocalDateTime currentDateTime = LocalDateTime.now();
          Timestamp currentTimestamp = Timestamp.valueOf(currentDateTime);
          task1.setTimestamp(currentTimestamp);
          task2.setTimestamp(currentTimestamp);
		  
		  taskRepository.save(task1);
		  taskRepository.save(task2);
			
			taskStatus status1 = new taskStatus("Pending");
			taskStatus status2 = new taskStatus("Completed");
			taskStatus status3 = new taskStatus("Overdue");
			
			taskStatusRepository.save(status1);
			taskStatusRepository.save(status2);
			taskStatusRepository.save(status3);*/
		  
		};
	}

}
