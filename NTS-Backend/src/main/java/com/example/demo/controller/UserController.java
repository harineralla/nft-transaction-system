package com.example.demo.controller;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Address;
import com.example.demo.model.NFT;
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
		user.setEth_balance(new BigDecimal(0));
		user.setFiat_balance(new BigDecimal(0));
		User userOne = userService.save(user);
		return new ResponseEntity<User>(userOne, HttpStatus.OK);
	}
	
	@PutMapping("/user")
	public ResponseEntity<User> saveOrUpdate(@RequestBody User user){
		User usr = userService.save(user);
		return new ResponseEntity<User>(usr,HttpStatus.OK);
	}
	
	@GetMapping("/user/update_level/{user_id}")
	public ResponseEntity<User> updateLevel(@PathVariable("user_id") Long id){
		User user = get(id).getBody();
		user.setLevel(!user.isLevel());
		userService.save(user);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<User> get(@PathVariable("id") Long id) {
		User user = userService.findById(id);
		if(user == null)
			return new ResponseEntity("User Not Found!!",HttpStatus.BAD_REQUEST);
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
		if(userService.findByEmail(user.getEmail()) !=null) {
			return new ResponseEntity("email already Exists",HttpStatus.BAD_REQUEST);
		}
		addressService.save(address);
		user.setEth_balance(new BigDecimal(0));
		user.setFiat_balance(new BigDecimal(0));
		userService.save(user);
		address.setUser(user);
		user.setAddress(address);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@GetMapping("/user/signIn/{email}/{password}")
	public ResponseEntity<User> userSignIn(@PathVariable("email") String email,@PathVariable("password") String password){
		User user=null;
		try {
			user=userService.findByEmail(email);
			if(!(user.getPassword()).equals(password)) {
				return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			}
		}catch(Exception e) {
			return new ResponseEntity("user does not exist", HttpStatus.BAD_REQUEST);
		}
		
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
}
