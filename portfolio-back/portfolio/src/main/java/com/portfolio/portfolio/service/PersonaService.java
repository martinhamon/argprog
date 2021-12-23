/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.service;

import com.portfolio.portfolio.model.Persona;
import com.portfolio.portfolio.repository.PersonaRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author MH
 */
@Service
public class PersonaService implements IPersonaService{
    @Autowired
    public PersonaRepository  persoRepo;
    @Override
    public List<Persona> verPersonas() {
       return persoRepo.findAll();
       
    }

    @Override
    public void crearPersona(Persona persona) {
        persoRepo.save(persona);
       
    }

    @Override
    public void borrarPersona(Long id) {
        persoRepo.deleteById(id);
         }

    @Override
    public Persona encontrarPersona(Long id) {
       return persoRepo.findById(id).orElse(null);
          }
    
}
