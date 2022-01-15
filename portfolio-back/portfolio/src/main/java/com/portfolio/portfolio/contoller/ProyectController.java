/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.contoller;

import com.portfolio.portfolio.model.Project;
import com.portfolio.portfolio.repository.ProjectRepository;
import java.util.List;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author MH
 */
@RestController
@CrossOrigin
public class ProyectController {
    @Autowired
    private ProjectRepository projectRepository;
    
    @RequestMapping (value = "/project/list", method = RequestMethod.GET)
    public List <Project> listEducation(){
        return projectRepository.findAll();
    }
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping (value = "/project/add", method = RequestMethod.POST)
    public Project addProject (@RequestBody Project project)
    {
        return projectRepository.save(project);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping (value = "/project/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteProject (@PathVariable Long id){
        
        Project p=null;
         try {
            p=projectRepository.findById(id).get();
        } catch (NoSuchElementException e) {
            
            return new  ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
           projectRepository.delete(p);
           return new  ResponseEntity<>(HttpStatus.OK);
    }
}
