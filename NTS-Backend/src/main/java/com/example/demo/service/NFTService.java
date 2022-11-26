package com.example.demo.service;

import java.util.List;

import com.example.demo.model.NFT;

public interface NFTService {
	List<NFT> findAll();
	
	NFT save(NFT nft);
	
	NFT findById(Long id);
	
	void delete(Long id);

	List<NFT> getAllNFTs(Long user_id);
	
	
}
