package com.example.todolist.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="task_status")
public class taskStatus 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "status")
	private String task_status;
	
	
	//Getters and setters
	
	public taskStatus()
	{
		
	}
	
	public taskStatus(String task_status)
	{
		super();
		this.task_status = task_status;
		
	}
	
	public String getStatus()
	{
		return task_status;
	}
}
