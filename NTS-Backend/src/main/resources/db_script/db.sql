 DROP DATABASE IF EXISTS db_nts;
 
 insert into tbl_user (cell_no, email, eth_address, eth_balance, fiat_balance, level, name, password, ph_no, address_id) values
    (214540992, 'john@gmail.com', 'john_eth_address', 3238.3, 1132.22, 0, 'John Thomas', 'nkadudbwbjdw', 3232974423, 32382409274),
    (214540934, 'sam@gmail.com', 'sam_eth_address', 423423238.3, 134532.22, 1, 'Sam Jonas', 'wrkrejwkfbsi', 5633474423, 5478658),
    (712532992, 'bob@gmail.com', 'bob_eth_address', 34353238.3, 122132.22, 1, 'Bob Alex', 'wkdhwihfkw', 5632974443, 12686857436),
    (614540992, 'anju@gmail.com', 'anju_eth_address', 3562342.3, 5472482.22, 1, 'Anju Boby', 'dwugwwfwiw', 7633974423, 32382409274),
    (567454092, 'Jenifer@gmail.com', 'jenifer_eth_address', 56234568.3, 1132.22, 1, 'Jenifer Thomas', 'heueufwqduca', 3696274423, 5478658),
    (467254240, 'Sannidhi@gmail.com', 'sanidhi_eth_address', 4872.3, 1132.22, 0, 'Sannidhi Das', 'gudjvjdfau', 5782974423, 46527893802),
    (426427278, 'Preethi@gmail.com', 'preethi_eth_address', 526342.3, 1132.22, 1, 'Preethi Sharma', 'fxgdhajfgka', 9356774423, 12686857436);

insert into tbl_address(address_id,city,state,street_address,zip_code) values
    (32382409274, 'Houston', 'Texas', '850 Greenside', 75080),
    (5478658, 'Dallas', 'Texas', '8430 Plano', 73450),
    (12686857436, 'Austin', 'Texas', '540 Clan', 87080),
    (46527893802, 'Boston', 'New York', '5462 North', 345546);


insert into tbl_deposit (date_of_payment, eth_amt, fiat_amt, payment_address, type, user_id) values
    (1998-03-21, 3485, 2344, 'dhuwdf', 'fgwdfwu', 1),
    (2021-08-23, 46522, 633, 'wgudgf', 'wguwg', 2),
    (2022-09-26, 94324, 3234, 'wwrwra', 'gegtta',3),
    (2020-02-12, 9322, 4485, 'dffsbj', 'wehwirb', 4),
    (2022-12-23,7838,3753, 'dgdfi', 'dgusfd', 5);

insert into tbl_transaction(buyer_eth_address,commission_paid, commission_type, current_eth_price, date, seller_eth_address, value_in_eth, nft_id) values
    ('bob_eth_address', 64834.78, 1, 24537.00, 2021-09-12, 'jenifer_eth_address', 34328701.3, 'sdfghjkj'),
    ('anju_eth_address', 4352.56, 1, 4256.2, 2022-09-12, 'sam_eth_address', 3558086.1, 'esthfjjh'),
    ('preethi_eth_address', 67.23, 1, 36.2, 2022-03-23, 'sanidhi_eth_address', 4836.1,'esrdgfhgh');

insert into tbl_nft(nft_id, eth_address, name, price, wants_to_sell, user_id) values 
    (45234, 'hjfiswfwvj', 'Monalisa_painting', 23454, 1,  214540992),
    (34623, 'djqhfdiyqwd', 'Nature_painting', 32574, 1,  214540934),
    (24923, 'dvaufdkou', 'Calender_Photos', 3472,0, 712532992),
    (23456, 'gdkwqofw', 'Serenity_Album', 2435, 1, 614540992),
    (24356, 'hqdgyfq2o', 'Avengers', 3546, 1,567454092);


