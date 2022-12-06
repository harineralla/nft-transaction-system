package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.web3j.abi.datatypes.generated.Uint256;

import com.example.demo.model.NFT;

@Repository
public interface NFTRepository extends JpaRepository<NFT, Long>{
	@Query(value = "SELECT * FROM tbl_nft WHERE user_id = ?1", nativeQuery = true)
	List<NFT> findNftOwnedByUsers(Long user_id);
}
