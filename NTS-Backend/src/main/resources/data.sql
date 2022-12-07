
 insert into tbl_address(city,state,street_address,zip_code) values
    ( 'Houston', 'Texas', '850 Greenside', 75080),
    ( 'Dallas', 'Texas', '8430 Plano', 73450),
    ( 'Austin', 'Texas', '540 Clan', 87080),
    ( 'Boston', 'New York', '5462 North', 345546),
    ('Las Vegas' , 'Arizona','823 W',58522);
 
 insert into tbl_user (cell_no, email, eth_address, eth_balance, fiat_balance, level,name, password, ph_no, address_id, role) values
    ("214540992", 'john@gmail.com', 'john_eth_address', 3238.3, 1132.22, 0, 'John Thomas', 'nkadudbwbjdw', "3232974423", 1, 0),
    ("214540934", 'sam@gmail.com', 'sam_eth_address', 42342323.3, 134532.22, 1, 'Sam Jonas', 'wrkrejwkfbsi', "5633474423", 2, 0),
    ("712532992", 'bob@gmail.com', 'bob_eth_address', 3435323.3, 122132.22, 1, 'Bob Alex', 'wkdhwihfkw', "5632974443", 3, 0),
    ("614540992", 'anju@gmail.com', 'anju_eth_address', 356242.3, 5472482.22, 1, 'Anju Boby', 'dwugwwfwiw', "7633974423", 4, 1),
    ("567454092", 'Jenifer@gmail.com', 'jenifer_eth_address', 5234568.3, 1132.22, 1, 'Jenifer Thomas', 'heueufwqduca', "3696274423", 5, 1);


insert into tbl_deposit ( eth_amt, fiat_amt, payment_address, type, user_id) values
    ( 3485, 2344, 'dhuwdf', 'fgwdfwu', 1),
    ( 46522, 633, 'wgudgf', 'wguwg', 2),
    ( 94324, 3234, 'wwrwra', 'gegtta',3),
    ( 9322, 4485, 'dffsbj', 'wehwirb', 4),  
    (7838,3753, 'dgdfi', 'dgusfd', 5);

    insert into tbl_nft(nft_id, eth_address, name, price, wants_to_sell, user_id) values 
    (1, 'hjfiswfwvj', 'Monalisa_painting', 23454, 0,  1),
    (2, 'djqhfdiyqwd', 'Nature_painting', 32574, 1,  2),
    (3, 'dvaufdkou', 'Calender_Photos', 3472,0, 3),
    (4, 'gdkwqofw', 'Serenity_Album', 2435, 1, 4),
    (5, 'hqdgyfq2o', 'Avengers', 3546, 1,5);

insert into tbl_transaction(buyer_eth_address,commission_paid, commission_type, current_eth_price, seller_eth_address, value_in_eth, nft_id) values
    ('bob_eth_address', 64834.78, 1, 24537.00,  'jenifer_eth_address', 34328701.3, 1),
    ('anju_eth_address', 4352.56, 1, 4256.2,  'sam_eth_address', 3558086.1, 2),
    ('preethi_eth_address', 67.23, 1, 36.2,  'sanidhi_eth_address', 4836.1,3);




