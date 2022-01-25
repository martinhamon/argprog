/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.portfolio.repository;

import com.portfolio.portfolio.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author MH
 */
public interface SkillRepository extends JpaRepository<Skill, Object> {
    Skill findById(Long id);
}
