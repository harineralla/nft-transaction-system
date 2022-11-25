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
import com.example.demo.service.AddressService;

@CrossOrigin("*")
@RestController
@RequestMapping("/v1")
public class AddressController {

	@Autowired
	AddressService addressService;
	
	@GetMapping("/addresss")
	public ResponseEntity<List<Address>> get() {
		List<Address> addresss = addressService.findAll();
		return new ResponseEntity<List<Address>>(addresss, HttpStatus.OK);
	}
	
	@PostMapping("/address")
	public ResponseEntity<Address> save(@RequestBody Address address) {
		Address addressOne = addressService.save(address);
		return new ResponseEntity<Address>(addressOne, HttpStatus.OK);
	}
	
	@GetMapping("/address/{id}")
	public ResponseEntity<Address> get(@PathVariable("id") Long id) {
		Address address = addressService.findById(id);
		return new ResponseEntity<Address>(address, HttpStatus.OK);
	}
	
	@DeleteMapping("/address/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id) {
		addressService.delete(id);
		return new ResponseEntity<String>("Address is deleted successfully.!", HttpStatus.OK);
	}
}
