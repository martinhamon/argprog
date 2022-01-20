/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.contoller;

import com.portfolio.portfolio.model.Profile;
import com.portfolio.portfolio.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
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
public class ProfileController {
    @Autowired ProfileService profileService;
    
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping (value = "/profile/get/{id}", method = RequestMethod.GET)
    public Profile getProfile  (@PathVariable Long id){
        return this.profileService.getProfile(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping (value = "/profile/save", method = RequestMethod.POST)
    public Profile getProfile  (@RequestBody Profile profile){
        return this.profileService.save(profile);
    }
    
}
