# NFT Transaction System (NTS)

## Overview

Welcome to the NFT Transaction System (NTS) project! NTS is a web-based application designed to facilitate the buying and selling of NFTs (Non-Fungible Tokens) on the Ethereum blockchain. The system leverages relational DBMS technology, specifically PostgreSQL, for robust data storage and querying to ensure efficient and secure transactions.

## Features

- **User Management**: Each trader has a unique client ID, name, phone number, cell-phone number, email address, and address.
- **Ethereum Integration**: Traders have unique Ethereum addresses used for trading NFTs.
- **Trader Classification**: Traders are classified as either "Gold" or "Silver" based on their transaction volume.
- **Transaction Management**: Traders can buy and sell NFTs, with automatic verification of ownership and funds.
- **Commission Handling**: Transaction commissions can be paid in either Ethereum or fiat currency.
- **Payment Management**: Support for depositing funds in USD or Ethereum.
- **Transaction Cancellation**: Allows for transaction cancellations within 15 minutes of submission.
- **History and Reporting**: Traders can view their transaction history, and managers can access aggregate transaction reports.

## Database Design and Management

The NTS project features a comprehensive database schema designed for optimal performance and scalability using PostgreSQL. Key aspects include:

### Schema Overview

| Table            | Description                                                                                                      |
|------------------|------------------------------------------------------------------------------------------------------------------|
| Traders          | Stores trader details, including unique client ID, personal information, Ethereum address, and classification.  |
| NFTs             | Maintains information about each NFT, including unique token ID, smart contract address, and name.              |
| Transactions     | Records every transaction with details such as transaction value, date, commission paid, NFT token ID, seller and buyer Ethereum addresses, and commission type. |
| Payments         | Logs all payments, including amount, date, payment type, trader ID, and payment address.                        |
| Cancellation Logs| Keeps track of any transaction cancellations for auditing purposes.                                              |

### Database Management

- **Indexing**: Strategic indexing on key fields to optimize query performance and ensure efficient data retrieval.
- **Data Integrity**: Use of foreign keys, unique constraints, and other integrity constraints to maintain accurate and reliable data.
- **Scalability**: The database is designed to handle increasing loads through techniques such as partitioning and replication.
- **Backup and Recovery**: Regular backup and recovery processes are implemented to protect against data loss and ensure business continuity.
- **Security**: The database employs encryption, access control, and other security measures to safeguard sensitive information.
- **Performance Optimization**: Performance tuning measures, including query optimization and caching strategies, are implemented to maintain high system efficiency.

## Technologies Used

- **Backend**: Spring Boot, Java
- **Frontend**: Svelte.js, JavaScript
- **Database**: PostgreSQL
- **Blockchain Integration**: Web3j
- **Containerization**: Docker

## Transaction Management

- **Buying an NFT**: Login, specify the NFT smart contract address and token ID, and complete the purchase.
- **Selling an NFT**: Ensure ownership of the NFT and list it for sale.
- **Depositing Funds**: Add funds to your account in USD or Ethereum.
- **Transaction History**: View past transactions and filter by date.

## Manager Interface

- Access aggregate information on daily, weekly, and monthly transactions.
- Retrieve transaction reports based on custom date ranges.

## Database Schema

Refer to the `schema.sql` file for the database structure, including tables for traders, NFTs, transactions, payments, and logs.

## API Endpoints

### User Endpoints

- `POST /api/register/`: Register a new trader.
- `POST /api/login/`: Authenticate a trader.
- `GET /api/trader/:id/`: Retrieve trader details.
- `PUT /api/trader/:id/update/`: Update trader information.

### Transaction Endpoints

- `POST /api/transaction/buy/`: Buy an NFT.
- `POST /api/transaction/sell/`: Sell an NFT.
- `GET /api/transaction/history/`: View transaction history.

### Payment Endpoints

- `POST /api/payment/deposit/`: Deposit funds.
- `DELETE /api/payment/:id/cancel/`: Cancel a payment.
  
- Project Link: [https://github.com/harineralla/nft-transaction-system](https://github.com/harineralla/nft-transaction-system)
