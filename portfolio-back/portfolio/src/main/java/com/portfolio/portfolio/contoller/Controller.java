/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.portfolio.portfolio.contoller;

import com.portfolio.portfolio.model.Persona;
import com.portfolio.portfolio.service.IPersonaService;
import com.portfolio.portfolio.service.PersonaService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author MH
 */
@RestController
public class Controller {
   @Autowired
   private IPersonaService personaService;
   /* @GetMapping ("/hola/{nombre}")
    public String hola (@PathVariable String nombre)
    {
        return "Hola , " + nombre;
    }
    
    @GetMapping ("/chau")
    public String decirChau (@RequestParam String nombre){
        return "Chau , " +nombre;
    }*/
    
    @PostMapping ("/agregarpersona/persona")
    public void agregarPersona (@RequestBody Persona persona){
      personaService.crearPersona(persona);
    }
    
    @GetMapping ("/listar")
    @ResponseBody
    public List<Persona> listar (){
        return personaService.verPersonas();
    }
}
