package com.example.todolist.model;

import java.util.Date;
import java.util.Optional;

import org.aspectj.weaver.patterns.HasMemberTypePatternForPerThisMatching;


import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name="tasks_spring")
public class tasks {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "taskName")
	private String taskName;
	
	@Column(name="description")
	private String description;
	
	//Foreign key that connects to primary key in taskStatus table , (cascade = CascadeType.ALL)
	/*@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "status",  referencedColumnName = "id")
	private taskStatus status;*/
	
	 @ManyToOne(cascade = CascadeType.MERGE)
	 @JoinColumn(name = "status", referencedColumnName = "id")
	//@Column(name="status")
	private taskStatus statusId;
	
	 	 
	//Date
	@JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Kuala Lumpur")
	@Column(name="dueDate")
	private Date dueDate;
	
	@Column(name="timestamp")
    private Timestamp timestamp;
	
	//Picture upload
	//Tagging
	
	/*--------------------------------------------------------------*/
	
	//Getters and Setters
	
	public tasks()
	{
		
	}
	public tasks(String taskName, String description, taskStatus statusId, Date dueDate)
	{
		super();
		this.taskName = taskName;
		this.description = description;
		this.statusId = statusId;
		this.dueDate = dueDate;
	}
	public long getId()
	{
		return id;
	}
	public void setId(long id)
	{
		this.id = id;
	}
	
	public String getTaskName()
	{
		return taskName;
	}
	public void setTaskName(String taskName)
	{
		this.taskName = taskName;
	}
	
	public String getDescription()
	{
		return description;
	}
	public void setDescription(String description)
	{
		this.description = description;
	}
	
	//Getter & Setter for Status object when rendered to front-end
	/*public taskStatus getStatus()
	{
		return status;
		
	}
	public void setStatus(taskStatus status)
	{
		this.status = status;
		
	}*/
	public taskStatus getStatus()
	{
		return statusId;
		
	}
	public void setStatus(taskStatus statusId)
	{
		this.statusId = statusId;
		
	}
	
	
	
	
	
	public Date getDate()
	{
		return dueDate;
	}
	public void setDate(Date dueDate)
	{
		this.dueDate = dueDate;
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
