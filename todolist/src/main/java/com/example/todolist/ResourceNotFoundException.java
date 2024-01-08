package com.example.todolist;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//Will be triggered if ID of task not found
@ResponseStatus(value= HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID = 1;
	
	public ResourceNotFoundException(String message)
	{
		super(message);
	}
	

}
