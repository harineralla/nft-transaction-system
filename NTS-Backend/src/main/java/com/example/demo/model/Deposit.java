package com.example.demo.model;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name="tbl_deposit")
public class Deposit {
	@Override
	public String toString() {
		return "Deposit [deposit_id=" + deposit_id + ", fiat_amt=" + fiat_amt + ", eth_amt=" + eth_amt
				+ ", date_of_payment=" + date_of_payment + ", user=" + user + ", type=" + type + ", payment_address="
				+ payment_address + "]";
	}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long deposit_id ;
	@Column(columnDefinition="Decimal(10,2) default '0.00'")
	private BigDecimal fiat_amt;
	@Column(columnDefinition="Decimal(10,2) default '0.00'")
	private BigDecimal eth_amt;
	@CreationTimestamp
	private Date date_of_payment;
	@ManyToOne(cascade = CascadeType.MERGE)
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
