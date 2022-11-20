package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="tbl_nft")
@Setter
@Getter
public class NFT {

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
	public Long getToken_id() {
		return token_id;
	}
	public void setToken_id(Long token_id) {
		this.token_id = token_id;
	}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long token_id;
	private String eth_address;
	private String name;

}
