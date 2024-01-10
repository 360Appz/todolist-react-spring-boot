package com.example.todolist.model;

import java.util.Date;

import org.aspectj.weaver.patterns.HasMemberTypePatternForPerThisMatching;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;

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
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "status_id")
	//@Column(name="status")
	private taskStatus status;
	
	@Column(name="due_date")
	private Date due_date;
	
	@Column(name="timestamp")
    private Timestamp timestamp;
	
	//Picture upload
	//Tagging
	
	//Getters and Setters
	
	public tasks()
	{
		
	}
	public tasks(String task_name, String description, taskStatus status, Date due_date)
	{
		super();
		this.task_name = task_name;
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
	
	public taskStatus get_status()
	{
		return status;
	}
	public void set_status(taskStatus status)
	{
		this.status = status;
	}
	public Date get_date()
	{
		return due_date;
	}
	public void set_date(Date due_date)
	{
		this.due_date = due_date;
	}
	
	public Timestamp getTimestamp()
	{
		return timestamp;
	}
	
	public void setTimestamp(Timestamp timestamp)
	{
		this.timestamp = timestamp;
	}
	

}
