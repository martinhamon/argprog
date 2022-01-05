/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.contoller;

import com.portfolio.portfolio.model.Job;

import com.portfolio.portfolio.repository.JobRepository;
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
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RestController

public class JobController {
    
    @Autowired
    private JobRepository jobRepository;
    
    @RequestMapping(value = "/job/list", method = RequestMethod.GET)
    public List< Job> listJobs (){
      return  jobRepository.findAll();
    }
    @RequestMapping(value = "/job/add", method = RequestMethod.POST)
    public Job addJob (@RequestBody Job job){
      return  jobRepository.save(job);
    }
    
    
    
}
