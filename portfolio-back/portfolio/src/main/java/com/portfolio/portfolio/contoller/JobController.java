/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.contoller;

import com.portfolio.portfolio.model.Job;

import com.portfolio.portfolio.repository.JobRepository;
import com.portfolio.portfolio.service.JwtUserDetailsService;
import java.util.Collection;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    @Autowired
    private JwtUserDetailsService userDetailService;
    
    
    @RequestMapping(value = "/job/list", method = RequestMethod.GET)
    public List< Job> listJobs (){
      return  jobRepository.findAll();
    }
    
    
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value = "/job/add", method = RequestMethod.POST)
    public Job addJob (@RequestBody Job job){
      return  jobRepository.save(job);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(value = "/job/delete/{id}")
    public ResponseEntity<Long> deleteJob (@PathVariable Long id)   
    {
        //Obtener informacion del usuario autentificado
        Authentication authentication  = SecurityContextHolder.getContext().getAuthentication();
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        // UserDetails details = userDetailService.loadUserByUsername(auth.getPrincipal());
       // if (details != null && details.getAuthorities().stream()
       // .anyMatch(a -> a.getAuthority().equals("ADMIN"))) {
        // ...
        //     }
        Job j = jobRepository.findById(id).get();
               
        if (j == null)
        {
             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        jobRepository.delete(j);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    
}
