package com.example.demo.service;

import java.math.BigDecimal;
import java.util.List;

import com.example.demo.model.Transaction;

// import antlr.collections.List;

public interface TransactionService {
    List<Transaction> findAll();
	
	Transaction save(Transaction transaction,BigDecimal eth_price);
	
	Transaction findById(Long id);
	
	void delete(Long id);

	Transaction cancel(Long id);

	List<Transaction> findTransactionsByUser(Long id);
}
