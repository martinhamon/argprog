/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.contoller;

import com.portfolio.portfolio.model.Skill;
import com.portfolio.portfolio.service.SkillService;
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
public class SkillController {
    
    @Autowired 
    SkillService skillService; 
    
    @RequestMapping (value = "/skill/list", method = RequestMethod.GET)
    public List <Skill> listEducation(){
        return skillService.getSkills();
    }
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping (value = "/skill/add", method = RequestMethod.POST)
    public Skill addProject (@RequestBody Skill skill)
    {
        return skillService.saveSkill(skill);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping (value = "/skill/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteProject (@PathVariable Long id){
        
        Skill p=null;
         try {
            p=skillService.findById(id);
        } catch (NoSuchElementException e) {
            
            return new  ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
           skillService.skillDelete(p);
           return new  ResponseEntity<>(HttpStatus.OK);
    }
}
