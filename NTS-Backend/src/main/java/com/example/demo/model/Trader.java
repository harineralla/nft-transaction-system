package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="tbl_trader")
@Setter
@Getter
public class Trader {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long trader_id ;
	private String name;
	private int ph_no;
	private int cell_no;
	private String email;
//	private Address address;
	//confirm the variable type
	private String eth_address;  
	private boolean level;
	
	

}
