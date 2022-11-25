package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Address;
import com.example.demo.model.User;
import com.example.demo.model.UserRegister;
import com.example.demo.service.AddressService;
import com.example.demo.service.UserService;

@CrossOrigin("*")
@RestController
@RequestMapping("/v1")
public class UserController {

	@Autowired
	UserService userService;
	
	@Autowired 
	AddressService addressService;
	
	@GetMapping("/users")
	public ResponseEntity<List<User>> get() {
		List<User> users = userService.findAll();
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	@PostMapping("/user")
	public ResponseEntity<User> save(@RequestBody User user) {
//		System.out.println(nft.getToken_id());
		User userOne = userService.save(user);
		return new ResponseEntity<User>(userOne, HttpStatus.OK);
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<User> get(@PathVariable("id") Long id) {
		User user = userService.findById(id);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@DeleteMapping("/user/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id) {
		userService.delete(id);
		return new ResponseEntity<String>("User is deleted successfully.!", HttpStatus.OK);
	}
	
	@PostMapping("/user/register")
	public ResponseEntity<User> userRegister(@RequestBody UserRegister obj){
		Address address = obj.getAddress();
		User user = obj.getUser();
		addressService.save(address);
		userService.save(user);
		address.setUser(user);
		user.setAddress(address);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
}
