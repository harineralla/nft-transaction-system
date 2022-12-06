package com.example.demo.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long>{
    @Query(value = "SELECT * FROM tbl_transaction WHERE seller_eth_address = ?1", nativeQuery = true)
	Set<Transaction> findBySeller_eth_address(String seller_eth_address);

    @Query(value = "SELECT * FROM tbl_transaction WHERE buyer_eth_address = ?1", nativeQuery = true)
	Set<Transaction> findByBuyer_eth_address(String buyer_eth_address);

    
}
