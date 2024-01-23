package com.example.todolist.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.todolist.model.taskStatus;

public interface TaskStatusRepository extends JpaRepository<taskStatus, Long> 
{
	
}
