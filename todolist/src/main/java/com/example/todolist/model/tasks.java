package com.example.todolist.model;

import org.aspectj.weaver.patterns.HasMemberTypePatternForPerThisMatching;

import jakarta.persistence.*;

@Entity
@Table(name="tasks_spring")
public class tasks {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "task_name")
	private String task_name;
	
	@Column(name="description")
	private String description;
	
	@Column(name="status")
	private String status;
	
	@Column(name="due_date")
	private int due_date;
	
	//Picture upload
	//Tagging
	
	//Getters and Setters
	
	public tasks()
	{
		
	}
	public tasks(String description, String status, int due_date)
	{
		super();
		this.description = description;
		this.status = status;
		this.due_date = due_date;
	}
	public long getId()
	{
		return id;
	}
	public void setId(long id)
	{
		this.id = id;
	}
	
	public String get_task_name()
	{
		return task_name;
	}
	public void set_task_name(String task_name)
	{
		this.task_name = task_name;
	}
	
	public String get_description()
	{
		return description;
	}
	public void set_description(String description)
	{
		this.description = description;
	}
	
	public String get_status()
	{
		return status;
	}
	public void set_status(String status)
	{
		this.status = status;
	}
	public int get_date()
	{
		return due_date;
	}
	public void set_date(int due_date)
	{
		this.due_date = due_date;
	}

}
