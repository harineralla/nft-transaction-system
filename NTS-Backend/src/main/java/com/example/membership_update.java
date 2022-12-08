package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import com.example.demo.repository.UserRepository;

@Configuration
@EnableScheduling
public class membership_update {

    @Autowired
	UserRepository userRepository;

    @Scheduled(cron="* * * * 1 *")
    public void updateMembership(){
        userRepository.updateMembership();
    }
    
}
