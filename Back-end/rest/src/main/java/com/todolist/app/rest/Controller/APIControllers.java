package com.todolist.app.rest.Controller;

import com.todolist.app.rest.Models.ToDo;
import com.todolist.app.rest.Repo.ToDoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class APIControllers {

    @Autowired
    private ToDoRepo toDoRepo;


    @GetMapping(value= "/")
    public List<ToDo> getToDos(){
            return toDoRepo.findAll();
        }
        
    @PostMapping(value = "/save")
        public String saveToDo(@RequestBody ToDo toDo){
            toDoRepo.save(toDo);
            return "Task has been saved...";
        }
    @PutMapping(value = "update/{id}")
        public String updateToDo(@PathVariable long id, @RequestBody ToDo toDo){
            ToDo updatedToDo = toDoRepo.findById(id).get();
            updatedToDo.setTitle(toDo.getTitle());
            updatedToDo.setDescription(toDo.getDescription());
            toDoRepo.save(updatedToDo);
            return "Task has been updated...";
        }
    @DeleteMapping(value = "/delete/{id}")
        public String deleteToDo(@PathVariable long id){
            ToDo deleteToDo = toDoRepo.findById(id).get();
            toDoRepo.delete(deleteToDo);
            return "Task with id: " +id+" has been deleted...";
        }
    }

