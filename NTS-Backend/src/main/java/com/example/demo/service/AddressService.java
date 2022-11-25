package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Address;

public interface AddressService {
	List<Address> findAll();
	
	Address save(Address nft);
	
	Address findById(Long id);
	
	void delete(Long id);
}
