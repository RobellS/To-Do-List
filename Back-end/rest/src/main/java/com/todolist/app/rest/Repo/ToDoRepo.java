package com.todolist.app.rest.Repo;

import com.todolist.app.rest.Models.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoRepo extends JpaRepository<ToDo, Long> {
}
