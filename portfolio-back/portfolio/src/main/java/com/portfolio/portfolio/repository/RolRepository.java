/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.repository;
import com.portfolio.portfolio.enums.RolName;
import com.portfolio.portfolio.model.Rol;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
/**
 *
 * @author MH
 */
@Repository
public interface RolRepository extends JpaRepository<Rol, Long> {
    boolean existsByRolName(RolName rolName);
    Optional<Rol> findByRolName(RolName rolName);
}
