package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.NFT;
import com.example.demo.repository.NFTRepository;

@Service
public class NFTServiceImpl implements NFTService{

	@Autowired
	NFTRepository nftRepository;
	
	@Override
	public List<NFT> findAll() {
		return nftRepository.findAll();
	}

	@Override
	public NFT save(NFT nft) {
		nftRepository.save(nft);
		return nft;
	}

	@Override
	public NFT findById(Long id) {
		if(nftRepository.findById(id).isPresent()){
			return nftRepository.findById(id).get();
		}
		return null;
	}

	@Override
	public void delete(Long id) {
		NFT expense = findById(id);
		nftRepository.delete(expense);
	}
	
}
