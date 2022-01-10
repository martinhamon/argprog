/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.service;


import com.portfolio.portfolio.enums.RolName;
import com.portfolio.portfolio.model.Rol;
import com.portfolio.portfolio.model.User;
import com.portfolio.portfolio.model.UserDto;

import com.portfolio.portfolio.repository.UserRepository;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;



import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

        @Autowired
    RolService rolService;
    @Autowired
	private UserRepository userDao;

	@Bean
public PasswordEncoder passwordEncoder()
{
    return new BCryptPasswordEncoder();
}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		com.portfolio.portfolio.model.User user = userDao.findByUsername(username);
		if (user == null || !user.isActive()) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
           List<GrantedAuthority> authorities= user.getRoles().stream().map(rol -> new SimpleGrantedAuthority(rol.getRolName().name())).collect(Collectors.toList());
		//return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(),
              //  authorities);
                 return UserDto.build(user);
	}

	public User save(UserDto user) {
		User newUser = new User();
		newUser.setUserName(user.getUsername());
		newUser.setPassword(passwordEncoder().encode(user.getPassword()));
                newUser.setName(user.getName());
                newUser.setLastName(user.getLastName());
                newUser.setMail(user.getMail());
               Rol rol = rolService.getByRolName(RolName.ROLE_USER).get();
        Set<Rol> roles = new HashSet<>();
        roles.add(rol);
        newUser.setRoles(roles);
               
		return userDao.save(newUser);
	}
        
        public List<?> getRoles()
        {
           Authentication auth = SecurityContextHolder
            .getContext()
            .getAuthentication();
            UserDto userDetail = (UserDto) auth.getPrincipal();
         Collection <GrantedAuthority> authorities= (Collection <GrantedAuthority>) userDetail.getAuthorities();
         List<GrantedAuthority> listAuthorities = new ArrayList<GrantedAuthority>();
        listAuthorities.addAll(authorities);
            return listAuthorities;
            
        }
	

}
