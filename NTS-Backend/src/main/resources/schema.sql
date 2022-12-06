DROP DATABASE IF EXISTS db_nts;

CREATE DATABASE db_nts;

USE db_nts;
 
 CREATE TABLE `tbl_address` (
  `address_id` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street_address` varchar(255) DEFAULT NULL,
  `zip_code` int NOT NULL,
  PRIMARY KEY (`address_id`)
) ;


  CREATE TABLE `tbl_user` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `cell_no` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `eth_address` varchar(255) DEFAULT NULL,
  `eth_balance` decimal(10,2) DEFAULT '0.00',
  `fiat_balance` decimal(10,2) DEFAULT '0.00',
  `level` tinyint(1) DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `ph_no` varchar(255) DEFAULT NULL,
  `address_id` bigint DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_npn1wf1yu1g5rjohbek375pp1` (`email`),
  UNIQUE KEY `UK_pdm8wef4d7a4i2mi1ibdl8psy` (`eth_address`),
  KEY `FK90iowha934giyinajc38vr026` (`address_id`),
  CONSTRAINT `FK90iowha934giyinajc38vr026` FOREIGN KEY (`address_id`) REFERENCES `tbl_address` (`address_id`)
) ;

  CREATE TABLE `tbl_nft` (
  `nft_id` bigint NOT NULL AUTO_INCREMENT,
  `eth_address` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(19,2) DEFAULT NULL,
  `wants_to_sell` tinyint(1) DEFAULT '0',
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`nft_id`),
  KEY `FKq1h19f8rhm6cv4n1vq687oihj` (`user_id`),
  CONSTRAINT `FKq1h19f8rhm6cv4n1vq687oihj` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

  CREATE TABLE `tbl_deposit` (
  `deposit_id` bigint NOT NULL AUTO_INCREMENT,
  `date_of_payment` datetime(6) DEFAULT NULL,
  `eth_amt` decimal(10,2) DEFAULT '0.00',
  `fiat_amt` decimal(10,2) DEFAULT '0.00',
  `payment_address` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`deposit_id`),
  KEY `FKqii5fxtcuf9tw7fdqv80fn294` (`user_id`),
  CONSTRAINT `FKqii5fxtcuf9tw7fdqv80fn294` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

  CREATE TABLE `tbl_transaction` (
  `transaction_id` bigint NOT NULL AUTO_INCREMENT,
  `buyer_eth_address` varchar(255) DEFAULT NULL,
  `commission_paid` decimal(10,2) DEFAULT '0.00',
  `commission_type` tinyint(1) DEFAULT '1',
  `current_eth_price` decimal(19,2) NOT NULL,
  `date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `seller_eth_address` varchar(255) DEFAULT NULL,
  `value_in_eth` decimal(10,2) DEFAULT '0.00',
  `nft_id` bigint DEFAULT NULL,
  PRIMARY KEY (`transaction_id`),
  KEY `FK4fsj8wgklnaxbc6ky247be9rd` (`nft_id`),
  CONSTRAINT `FK4fsj8wgklnaxbc6ky247be9rd` FOREIGN KEY (`nft_id`) REFERENCES `tbl_nft` (`nft_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;