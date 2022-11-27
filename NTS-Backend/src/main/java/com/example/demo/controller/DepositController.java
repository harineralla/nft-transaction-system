/**
 * 
 */
package com.example.demo.controller;


import java.math.BigDecimal;
import java.util.Date;
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

import com.example.demo.model.Deposit;
import com.example.demo.model.User;
import com.example.demo.service.DepositService;
import com.example.demo.service.UserService;

@CrossOrigin("*")
@RestController
@RequestMapping("/v1")
public class DepositController {
	@Autowired
	DepositService depositService;
	
	@Autowired
	UserService userService;
	
	@GetMapping("/deposits")
	public ResponseEntity<List<Deposit>> get() {
		List<Deposit> deposits = depositService.findAll();
		return new ResponseEntity<List<Deposit>>(deposits, HttpStatus.OK);
	}
	
	@PostMapping("/deposit")
	public ResponseEntity<Deposit> save(@RequestBody Deposit deposit) {
		deposit.setDate_of_payment(new Date());
		System.out.println(deposit.toString());
		Deposit depositOne = depositService.save(deposit);
		User user = userService.findById(deposit.getUser().getUser_id());
//		System.out.println(user.getUser_id());
		user.getDeposits().add(deposit);
		if(deposit.getFiat_amt()!=null)
			user.setFiat_balance(user.getFiat_balance().add(deposit.getFiat_amt()));
		if(deposit.getEth_amt()!=null)
			user.setEth_balance(user.getEth_balance().add(deposit.getEth_amt()));
		userService.save(user);
//		user.setEth_balance(user.getEth_balance().add(deposit.getEth_amt()));
//		System.out.println(user.toString());
		return new ResponseEntity<Deposit>(depositOne, HttpStatus.OK);
	}
	
	@GetMapping("/deposit/{id}")
	public ResponseEntity<Deposit> get(@PathVariable("id") Long id) {
		Deposit deposit = depositService.findById(id);
		return new ResponseEntity<Deposit>(deposit, HttpStatus.OK);
	}
	
	@DeleteMapping("/deposit/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id) {
		depositService.delete(id);
		return new ResponseEntity<String>("Deposit is deleted successfully.!", HttpStatus.OK);
	}
}
