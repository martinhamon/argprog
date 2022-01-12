/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.model;

import java.io.Serializable;
import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;

public class JwtResponse implements Serializable {

	private static final long serialVersionUID = -8091879091924046844L;
	private final String jwttoken;
        private Collection<? extends GrantedAuthority> roles;

	public JwtResponse(String jwttoken, Collection<? extends GrantedAuthority> roles) {
		this.jwttoken = jwttoken;
                this.roles=roles;
	}

	public String getToken() {
		return this.jwttoken;
	}

    /**
     * @return the roles
     */
    public Collection<? extends GrantedAuthority> getRoles() {
        return roles;
    }

    /**
     * @param roles the roles to set
     */
    public void setRoles(Collection<? extends GrantedAuthority> roles) {
        this.roles = roles;
    }
        
}
