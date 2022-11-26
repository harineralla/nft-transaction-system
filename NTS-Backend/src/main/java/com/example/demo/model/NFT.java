package com.example.demo.model;

import java.math.BigDecimal;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



@Entity
@Table(name="tbl_nft")
public class NFT {


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long nft_id;
	private String eth_address;
	private String name;
	private BigDecimal price;
	@Column(columnDefinition = "boolean default false")
	private boolean wants_to_sell;
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User user;

	public Long getNft_id() {
		return nft_id;
	}
	public void setNft_id(Long nft_id) {
		this.nft_id = nft_id;
	}
	public String getEth_address() {
		return eth_address;
	}
	public void setEth_address(String eth_address) {
		this.eth_address = eth_address;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public boolean isWants_to_sell() {
		return wants_to_sell;
	}
	public void setWants_to_sell(boolean wants_to_sell) {
		this.wants_to_sell = wants_to_sell;
	}
}
