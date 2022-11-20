package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.NFT;

@Repository
public interface NFTRepository extends JpaRepository<NFT, Long>{

}
