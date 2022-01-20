/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.service;

import com.portfolio.portfolio.model.Profile;
import com.portfolio.portfolio.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author MH
 */
@Service
public class ProfileService {
    @Autowired
    private ProfileRepository PrRepository;
    
    public Profile getProfile (Long id){
        return this.PrRepository.findById(id).get();
    }
    
    public Profile save (Profile profile ){
       return PrRepository.save(profile);
         
    }
}
