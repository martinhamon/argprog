/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.service;

import com.portfolio.portfolio.model.User;
import com.portfolio.portfolio.model.UserDto;
import com.portfolio.portfolio.repository.UserRepository;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;


import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

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
		return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(),
				new ArrayList<>());
	}

	public User save(UserDto user) {
		User newUser = new User();
		newUser.setUserName(user.getUsername());
		newUser.setPassword(passwordEncoder().encode(user.getPassword()));
                newUser.setName(user.getName());
                newUser.setLastName(user.getLastName());
                newUser.setMail(user.getMail());
                newUser.setAdmin(false);
               
		return userDao.save(newUser);
	}
	

}
