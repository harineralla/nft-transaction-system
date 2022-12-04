package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.NFT;
import com.example.demo.model.User;
import com.example.demo.service.NFTService;
import com.example.demo.service.UserService;


@CrossOrigin("*")
@RestController
@RequestMapping("/v1")
public class NFTController {

	@Autowired
	NFTService nftService;
	
	@Autowired
	UserService userService;
	
	
	
	@GetMapping("/nfts")
	public ResponseEntity<List<NFT>> get() {
		List<NFT> nfts = nftService.findAll();
		return new ResponseEntity<List<NFT>>(nfts, HttpStatus.OK);
	}

	@GetMapping("/nfts/market")
	public ResponseEntity<List<NFT>> getNftsInMarket(){
		List<NFT> nfts=get().getBody();
		// System.out.println(nfts+"hiowefkdsf");
		List<NFT> lis=new ArrayList<NFT>();
		for(NFT i:nfts)
			if(i.isWants_to_sell())
				lis.add(i);
		// System.out.println(nfts.get(0)+"fids");
		if(lis==null || lis.size()==0)
			return new ResponseEntity("No NFTs Found", HttpStatus.BAD_REQUEST);
		return new ResponseEntity<List<NFT>>(nfts, HttpStatus.OK);

	}
	
	@PostMapping("/nft")
	public ResponseEntity<NFT> save(@RequestBody NFT nft) {
//		System.out.println(nft.getToken_id());
		NFT nftOne = nftService.save(nft);
		return new ResponseEntity<NFT>(nftOne, HttpStatus.OK);
	}
	
	@GetMapping("/nft/{id}")
	public ResponseEntity<NFT> get(@PathVariable("id") Long id) {
		NFT nft = nftService.findById(id);
		return new ResponseEntity<NFT>(nft, HttpStatus.OK);
	}
	
	@GetMapping("/nft/sell/{nft_id}")
	public ResponseEntity<NFT> ToggleSell(@PathVariable("nft_id") Long id){
		NFT nft=get(id).getBody();
		if(nft==null)
			return new ResponseEntity("NFT Not Found!", HttpStatus.BAD_REQUEST);
		nft.setWants_to_sell(!nft.isWants_to_sell());
		nftService.save(nft);
		return new ResponseEntity<NFT>(nft, HttpStatus.OK);
	}
	
	
	
	@PutMapping("/user/{user_id}/nft/{nft_id}")
	public User allocateNFTToOwner(@PathVariable Long user_id,@PathVariable Long nft_id) {
		User user=userService.findById(user_id);
		NFT nft =nftService.findById(nft_id);
		user.asignNFT(nft);
		nft.setUser(user);
		return userService.save(user);
	}
	
	@DeleteMapping("/nft/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id) {
		nftService.delete(id);
		return new ResponseEntity<String>("NFT is deleted successfully.!", HttpStatus.OK);
	}
	
	@GetMapping("/list/user/nfts/{user_id}")
	public ResponseEntity<List<NFT>> listNfts(@PathVariable Long user_id){
		List<NFT> nfts = nftService.getAllNFTs(user_id);
		return new ResponseEntity<List<NFT>>(nfts, HttpStatus.OK);
	}
	
}
