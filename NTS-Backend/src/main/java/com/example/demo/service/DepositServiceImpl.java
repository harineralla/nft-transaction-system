package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Deposit;
import com.example.demo.repository.DepositRepository;

@Service
public class DepositServiceImpl implements DepositService{
	@Autowired
	DepositRepository depositRepository;
	
	@Override
	public List<Deposit> findAll() {
		return depositRepository.findAll();
	}

	@Override
	public Deposit save(Deposit deposit) {
		depositRepository.save(deposit);
		return deposit;
	}

	@Override
	public Deposit findById(Long id) {
		if(depositRepository.findById(id).isPresent()){
			return depositRepository.findById(id).get();
		}
		return null;
	}

	@Override
	public void delete(Long id) {
		Deposit deposit = findById(id);
		depositRepository.delete(deposit);
	}

}
