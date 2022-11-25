package com.example.demo.model;

import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="tbl_deposit")
public class Deposit {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long deposit_id ;
	private BigDecimal fiat_amt;
	private BigDecimal eth_amt;
	private Date date_of_payment;
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User user;
	private String type;
	private String payment_address;
	
	public Long getDeposit_id() {
		return deposit_id;
	}
	public void setDeposit_id(Long deposit_id) {
		this.deposit_id = deposit_id;
	}
	public BigDecimal getFiat_amt() {
		return fiat_amt;
	}
	public void setFiat_amt(BigDecimal fiat_amt) {
		this.fiat_amt = fiat_amt;
	}
	public BigDecimal getEth_amt() {
		return eth_amt;
	}
	public void setEth_amt(BigDecimal eth_amt) {
		this.eth_amt = eth_amt;
	}
	public Date getDate_of_payment() {
		return date_of_payment;
	}
	public void setDate_of_payment(Date date_of_payment) {
		this.date_of_payment = date_of_payment;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getPayment_address() {
		return payment_address;
	}
	public void setPayment_address(String payment_address) {
		this.payment_address = payment_address;
	}

	
	
}
