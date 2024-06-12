# NFT Transaction System (NTS)

## Overview

Welcome to the NFT Transaction System (NTS) project! NTS is a web-based application designed to facilitate the buying and selling of NFTs (Non-Fungible Tokens) on the Ethereum blockchain. The system leverages relational DBMS technology for data storage and querying to ensure efficient and secure transactions.

## Features

- **User Management**: Each trader has a unique client ID, name, phone number, cell-phone number, email address, and address.
- **Ethereum Integration**: Traders have unique Ethereum addresses used for trading NFTs.
- **Trader Classification**: Traders are classified as either "Gold" or "Silver" based on their transaction volume.
- **Transaction Management**: Traders can buy and sell NFTs, with automatic verification of ownership and funds.
- **Commission Handling**: Transaction commissions can be paid in either Ethereum or fiat currency.
- **Payment Management**: Support for depositing funds in USD or Ethereum.
- **Transaction Cancellation**: Allows for transaction cancellations within 15 minutes of submission.
- **History and Reporting**: Traders can view their transaction history, and managers can access aggregate transaction reports.

## Requirements

- Java 11+
- Spring Boot 2.5+
- PostgreSQL 13+
- Node.js 14+ and npm (for Svelte.js frontend)
- Web3j for Ethereum interactions
- Docker (optional, for containerization)

## Installation

### Prerequisites

Ensure you have the following installed:

- Java 11+
- PostgreSQL
- Node.js and npm

### Steps

1. **Clone the repository**:
    ```sh
    git clone https://github.com/harineralla/nft-transaction-system.git
    cd nft-transaction-system
    ```

2. **Backend Setup**

    a. **Navigate to the backend directory**:
    ```sh
    cd backend
    ```

    b. **Configure the database**:
    - Create a PostgreSQL database and user for the project.
    - Update the `application.properties` file with your database settings.

    c. **Build the backend**:
    ```sh
    ./mvnw clean install
    ```

    d. **Run the backend**:
    ```sh
    ./mvnw spring-boot:run
    ```

3. **Frontend Setup**

    a. **Navigate to the frontend directory**:
    ```sh
    cd ../frontend
    ```

    b. **Install the dependencies**:
    ```sh
    npm install
    ```

    c. **Run the frontend**:
    ```sh
    npm run dev
    ```

4. **Access the application**

    - Open your web browser and navigate to `http://localhost:5000` for the frontend.
    - The backend will be running on `http://localhost:8080`.

## Usage

### Running the Application

- Navigate to `http://localhost:5000` in your web browser.
- Log in using the credentials created during the setup.
- Access the trader and manager functionalities via the user interface.

### Transaction Management

- **Buying an NFT**: Log in, specify the NFT smart contract address and token ID, and complete the purchase.
- **Selling an NFT**: Ensure ownership of the NFT and list it for sale.
- **Depositing Funds**: Add funds to your account in either USD or Ethereum.
- **Transaction History**: View past transactions and filter by date.

### Manager Interface

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
