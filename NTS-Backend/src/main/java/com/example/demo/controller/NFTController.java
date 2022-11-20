package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.NFT;
import com.example.demo.service.NFTService;


@CrossOrigin("*")
@RestController
@RequestMapping("/v1")
public class NFTController {

	@Autowired
	NFTService nftService;
	
	@GetMapping("/nfts")
	public ResponseEntity<List<NFT>> get() {
		List<NFT> nfts = nftService.findAll();
		return new ResponseEntity<List<NFT>>(nfts, HttpStatus.OK);
	}
	
	@PostMapping("/nfts")
	public ResponseEntity<NFT> save(@RequestBody NFT nft) {
//		System.out.println(nft.getToken_id());
		NFT nftOne = nftService.save(nft);
		return new ResponseEntity<NFT>(nftOne, HttpStatus.OK);
	}
	
	@GetMapping("/nfts/{id}")
	public ResponseEntity<NFT> get(@PathVariable("id") Long id) {
		NFT nft = nftService.findById(id);
		return new ResponseEntity<NFT>(nft, HttpStatus.OK);
	}
	
	@DeleteMapping("/nfts/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id) {
		nftService.delete(id);
		return new ResponseEntity<String>("NFT is deleted successfully.!", HttpStatus.OK);
	}
}
