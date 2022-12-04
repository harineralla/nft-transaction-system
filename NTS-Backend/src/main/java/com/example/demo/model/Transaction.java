package com.example.demo.model;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="tbl_transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long transaction_id ;
    @Column(columnDefinition="Decimal(10,2) default '0.00'")
    private BigDecimal value_in_eth;
    @CreationTimestamp
    private Date date;
    @Column(columnDefinition="Decimal(10,2) default '0.00'")
    private BigDecimal commission_paid;
    //true if paid by eth else false if paid by fiat
    @Column(columnDefinition = "boolean default true")
    private boolean commission_type;
    @Column(nullable = false)
    private BigDecimal current_eth_price;
    
    // private String nft_address;// <- present in NFT table;
    
    @ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name="nft_id")
	private NFT nft;
    // private Long nft_id;


    private String buyer_eth_address;// <- needs to be fetched from user;
    private String seller_eth_address;// <- needs to be fetched from user;

    public Long getTransaction_id() {
        return transaction_id;
    }

    public void setTransaction_id(Long transaction_id) {
        this.transaction_id = transaction_id;
    }

    public BigDecimal getValue_in_eth() {
        return value_in_eth;
    }

    public void setValue_in_eth(BigDecimal value_in_eth) {
        this.value_in_eth = value_in_eth;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public BigDecimal getCommission_paid() {
        return commission_paid;
    }

    public void setCommission_paid(BigDecimal commission_paid) {
        this.commission_paid = commission_paid;
    }

    public boolean isCommission_type() {
        return commission_type;
    }

    public void setCommission_type(boolean commission_type) {
        this.commission_type = commission_type;
    }

    public BigDecimal getCurrent_eth_price() {
        return current_eth_price;
    }

    public void setCurrent_eth_price(BigDecimal current_eth_price) {
        this.current_eth_price = current_eth_price;
    }

    public NFT getNft() {
        return nft;
    }

    public void setNft(NFT nft) {
        this.nft = nft;
    }

    public String getBuyer_eth_address() {
        return buyer_eth_address;
    }

    public void setBuyer_eth_address(String buyer_eth_address) {
        this.buyer_eth_address = buyer_eth_address;
    }

    public String getSeller_eth_address() {
        return seller_eth_address;
    }

    public void setSeller_eth_address(String seller_eth_address) {
        this.seller_eth_address = seller_eth_address;
    }

    @Override
    public String toString() {
        return "Transaction [transaction_id=" + transaction_id + ", value_in_eth=" + value_in_eth + ", date=" + date
                + ", commission_paid=" + commission_paid + ", commission_type=" + commission_type
                + ", current_eth_price=" + current_eth_price + ", nft=" + nft.toString() + ", buyer_eth_address="
                + buyer_eth_address + ", seller_eth_address=" + seller_eth_address + "]";
    }









    
//     The value of the transaction in Ethereum, the date of the transaction, the commission
// paid, the commission type, the NFT address, NFT toked id, the seller Ethereum address
// and the buyer Ethereum address should be stored separately for each transaction. 


}
