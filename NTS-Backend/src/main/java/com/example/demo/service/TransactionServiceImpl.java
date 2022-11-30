package com.example.demo.service;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.NFT;
import com.example.demo.model.Transaction;
import com.example.demo.model.User;
import com.example.demo.repository.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService{

	public static final BigDecimal gold_membership_commission = new BigDecimal(0.025);
	public static final BigDecimal silver_membership_commission = new BigDecimal(0.05);


	@Autowired
	TransactionRepository transactionRepository;

	@Autowired
	UserService userService;

	@Autowired
	NFTService nftService;
	
	@Override
	public List<Transaction> findAll() {
		return transactionRepository.findAll();
	}

	@Override
	public Transaction save(Transaction transaction,BigDecimal eth_price) {
		System.out.println("dshfs");
		String buyer_eth_address = transaction.getBuyer_eth_address();
		String seller_eth_address = transaction.getSeller_eth_address();
		User buyer = userService.findByETHAddresUser(buyer_eth_address);
		User seller = userService.findByETHAddresUser(seller_eth_address);

		// User user = userService.findById(deposit.getUser().getUser_id());
		System.out.println("dshf "+transaction.toString());
		NFT nft = nftService.findById(transaction.getNft().getNft_id());
		// System.out.println("nft sad "+nft.getNft_id());
		BigDecimal commission = buyer.isLevel()?gold_membership_commission:silver_membership_commission;
		BigDecimal total_eth_commission = nft.getPrice().multiply(commission);
		if(transaction.isCommission_type()){
			buyer.setEth_balance(buyer.getEth_balance().subtract(total_eth_commission)); 
		}else{
			buyer.setFiat_balance(buyer.getFiat_balance().subtract(total_eth_commission.multiply(eth_price)));
		}

		BigDecimal nft_price_in_eth = nft.getPrice();
		if(buyer.getEth_balance().compareTo(nft_price_in_eth)<0){
			buyer.setEth_balance(buyer.getEth_balance().add(buyer.getFiat_balance().divide(eth_price)));
			buyer.setFiat_balance(new BigDecimal(0));
		}

		buyer.setEth_balance(buyer.getEth_balance().subtract(nft_price_in_eth));
		seller.setEth_balance(seller.getEth_balance().add(nft_price_in_eth));
		nft.setUser(buyer);
		buyer.getNfts().add(nft);
		seller.getNfts().remove(nft);
		transaction.setCommission_paid(total_eth_commission);
		transaction.setValue_in_eth(nft_price_in_eth);
		transaction.setCurrent_eth_price(eth_price);
		// buyer.getBuy_Transactions().add(transaction);
		// seller.getSell_Transactions().add(transaction);
		nft.getTransactions().add(transaction);
		transactionRepository.save(transaction);
		return transaction;
	}

	@Override
	public Transaction findById(Long id) {
		if(transactionRepository.findById(id).isPresent()){
			return transactionRepository.findById(id).get();
		}
		return null;
	}

	@Override
	public void delete(Long id) {
		Transaction transaction = findById(id);
		transactionRepository.delete(transaction);
	}
    
}