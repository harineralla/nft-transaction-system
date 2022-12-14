package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserRepository userRepository;
	
	@Override
	public List<User> findAll() {
		return userRepository.findAll();
	}

	@Override
	public User save(User user) {
		userRepository.save(user);
		return user;
	}

	@Override
	public User findById(Long id) {
		if(userRepository.findById(id).isPresent()){
			return userRepository.findById(id).get();
		}
		return null;
	}

	@Override
	public void delete(Long id) {
		User user = findById(id);
		userRepository.delete(user);
	}

	@Override
	public User findByEmail(String email) {
		try {
			if(userRepository.findByEmail(email)!=null){
				return userRepository.findByEmail(email);
			}
		}catch(Exception e) {
			System.out.println("Internal Server Exception");
		}
	
		return null;
	}

	@Override
	public User findByETHAddresUser(String eth_address) {
		try {
			if(userRepository.findByEthAddress(eth_address)!=null){
				return userRepository.findByEthAddress(eth_address);
			}
		}catch(Exception e) {
			System.out.println("Internal Server Exception");
		}
	
		return null;
	}


}
