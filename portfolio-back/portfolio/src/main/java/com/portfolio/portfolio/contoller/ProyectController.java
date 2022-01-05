/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.contoller;

import com.portfolio.portfolio.model.Education;
import com.portfolio.portfolio.model.Project;
import com.portfolio.portfolio.repository.EducationRepository;
import com.portfolio.portfolio.repository.ProjectRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
    
    @RequestMapping (value = "/project/add", method = RequestMethod.POST)
    public Project addProject (@RequestBody Project project)
    {
        return projectRepository.save(project);
    }
    
}
