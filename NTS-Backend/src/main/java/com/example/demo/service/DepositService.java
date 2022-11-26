package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Deposit;

public interface DepositService {
	List<Deposit> findAll();
	
	Deposit save(Deposit deposit);
	
	Deposit findById(Long id);
	
	void delete(Long id);
}
