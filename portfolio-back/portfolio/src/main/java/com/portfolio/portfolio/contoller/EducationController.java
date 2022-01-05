/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.contoller;

import com.portfolio.portfolio.model.Education;
import com.portfolio.portfolio.repository.EducationRepository;
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
public class EducationController {
    @Autowired
    private EducationRepository educationRepository;
    
    @RequestMapping(value = "/education/list", method = RequestMethod.GET)
    public List<Education> listEducation ()
    {
        return educationRepository.findAll();
    }
    @RequestMapping (value = "/education/add", method= RequestMethod.POST)
    public Education addEducation (@RequestBody Education education)
    {
        return educationRepository.save(education);
    }
    
}
