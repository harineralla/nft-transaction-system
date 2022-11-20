package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="tbl_user")
@Setter
@Getter
public class User {
	@Id
	private String username;
	private String password;
	private int role;
}
