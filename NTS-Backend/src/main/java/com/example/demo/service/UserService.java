package com.example.demo.service;

import java.util.List;

import com.example.demo.model.User;

public interface UserService {
	List<User> findAll();
	
	User save(User user);
	
	User findById(Long id);
	
	void delete(Long id);
	
	User findByEmail(String email);

	User findByETHAddresUser(String eth_address);


}
