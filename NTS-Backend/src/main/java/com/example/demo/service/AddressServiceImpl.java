package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Address;
import com.example.demo.repository.AddressRepository;

@Service
public class AddressServiceImpl implements AddressService{

	@Autowired
	AddressRepository addressRepository;
	
	@Override
	public List<Address> findAll() {
		return addressRepository.findAll();
	}

	@Override
	public Address save(Address address) {
		addressRepository.save(address);
		return address;
	}

	@Override
	public Address findById(Long id) {
		if(addressRepository.findById(id).isPresent()){
			return addressRepository.findById(id).get();
		}
		return null;
	}

	@Override
	public void delete(Long id) {
		Address address = findById(id);
		addressRepository.delete(address);
	}
}
