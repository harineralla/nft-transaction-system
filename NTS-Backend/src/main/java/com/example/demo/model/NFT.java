package com.example.demo.model;

import javax.persistence.CascadeType;
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

}
