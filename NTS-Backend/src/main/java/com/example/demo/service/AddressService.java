package com.example.demo.service;

import java.util.List;


import com.example.demo.model.Address;

public interface AddressService {
	List<Address> findAll();
	
	Address save(Address address);
	
	Address findById(Long id);
	
	void delete(Long id);
}
