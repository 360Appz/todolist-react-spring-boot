package com.example.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.todolist.model.tasks;

@Repository
public interface TaskRepository extends JpaRepository<tasks, Long>{

}
