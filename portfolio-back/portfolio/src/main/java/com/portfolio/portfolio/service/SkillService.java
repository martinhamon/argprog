/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.service;

import com.portfolio.portfolio.exceptions.NonexistentEntityException;
import com.portfolio.portfolio.model.Skill;
import com.portfolio.portfolio.repository.SkillRepository;
import java.util.List;
import javax.persistence.Entity;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author MH
 */

@Service
public class SkillService {
    
    
    
    @Autowired 
    SkillRepository skillRepository;
    
    public  List<Skill> getSkills(){
        
        return this.skillRepository.findAll();
    }
    
    public Skill saveSkill(Skill skill){
        
        return this.skillRepository.save(skill);
    }
    
    public void skillDelete (Skill skill) 
    {
       
            this.skillRepository.delete(skill);
       
       
    }

    public Skill findById(Long id) {
       return this.skillRepository.findById(id);
    }
    
    
}
