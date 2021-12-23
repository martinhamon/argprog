/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.portfolio.service;

import com.portfolio.portfolio.model.Persona;
import java.util.List;

/**
 *
 * @author MH
 */
public interface IPersonaService {
    public List <Persona> verPersonas();
    public void crearPersona (Persona persona);
    public void borrarPersona (Long id);
    public Persona encontrarPersona (Long id);
    
}
