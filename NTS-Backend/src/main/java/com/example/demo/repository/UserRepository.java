package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmail(String email);
	User findByEthAddress(String eth_address);
	@Query(value = "UPDATE tbl_user SET level = true WHERE tbl_user.user_id IN (SELECT SUM(value_in_eth) FROM tbl_transaction WHERE date >= DATEADD(month, -1, GETDATE()) and date <= CURRENT_TIMESTAMP GROUP BY  buyer_eth_address,seller_eth_address)", nativeQuery = true)
	void updateMembership();

}
