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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Transaction;
import com.example.demo.service.TransactionService;

@CrossOrigin("*")
@RestController
@RequestMapping("/v1")
public class TransactionController {
    @Autowired
	TransactionService transactionService;
	
	@GetMapping("/transactions")
	public ResponseEntity<List<Transaction>> get() {
		List<Transaction> transactions = transactionService.findAll();
		return new ResponseEntity<List<Transaction>>(transactions, HttpStatus.OK);
	}

    
	/**
	 * @param transaction
	 * @return
	 */
	@PostMapping("/transaction")
	public ResponseEntity<Transaction> save(@RequestBody Transaction transaction,@RequestParam BigDecimal eth_price) {
		//eth_price -> price of 1 ETH in USD
		Transaction transactionOne = transactionService.save(transaction,eth_price);
		return new ResponseEntity<Transaction>(transactionOne, HttpStatus.OK);
	}
	
	@GetMapping("/transaction/{id}")
	public ResponseEntity<Transaction> get(@PathVariable("id") Long id) {
		Transaction transaction = transactionService.findById(id);
		return new ResponseEntity<Transaction>(transaction, HttpStatus.OK);
	}

    @DeleteMapping("/transaction/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id) {
		transactionService.delete(id);
		return new ResponseEntity<String>("transaction is deleted successfully.!", HttpStatus.OK);
	}

	@GetMapping("/cancel/transaction/{id}")
	public ResponseEntity<Transaction> cancelTransaction(@PathVariable("id") Long id){
		Transaction transaction = transactionService.cancel(id);
		return new ResponseEntity<Transaction>(transaction,HttpStatus.OK);
	}

}
