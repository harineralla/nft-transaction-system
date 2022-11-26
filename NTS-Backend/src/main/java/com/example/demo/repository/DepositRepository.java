package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Deposit;

public interface DepositRepository extends JpaRepository<Deposit, Long>{

}
