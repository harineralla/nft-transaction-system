package com.example.demo.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name="tbl_user")
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long user_id ;
	// first Name + last Name
	private String name;
	private int ph_no;
	private int cell_no;
	//make this unique
	@Column(unique=true)
	private String email;
	private String password;
	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
	private Address address;
	//confirm the variable type
	private String eth_address;
	private boolean level;
	private BigDecimal eth_balance;
	private BigDecimal fiat_balance;
	@JsonIgnore
	@OneToMany(mappedBy="user")
	private List<NFT> nfts = new ArrayList<>();
	@JsonIgnore
	@OneToMany(mappedBy="user")
	private List<Deposit> deposits = new ArrayList<>();
	
	
	public Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPh_no() {
		return ph_no;
	}
	public void setPh_no(int ph_no) {
		this.ph_no = ph_no;
	}
	public int getCell_no() {
		return cell_no;
	}
	public void setCell_no(int cell_no) {
		this.cell_no = cell_no;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEth_address() {
		return eth_address;
	}
	public void setEth_address(String eth_address) {
		this.eth_address = eth_address;
	}
	public boolean isLevel() {
		return level;
	}
	public void setLevel(boolean level) {
		this.level = level;
	}
	public BigDecimal getEth_balance() {
		return eth_balance;
	}
	public void setEth_balance(BigDecimal eth_balance) {
		this.eth_balance = eth_balance;
	}
	public BigDecimal getFiat_balance() {
		return fiat_balance;
	}
	public void setFiat_balance(BigDecimal fiat_balance) {
		this.fiat_balance = fiat_balance;
	}
	public List<NFT> getNfts() {
		return nfts;
	}
	public void setNfts(List<NFT> nfts) {
		this.nfts = nfts;
	}
	public void asignNFT(NFT nft) {
		nfts.add(nft);
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}


}
