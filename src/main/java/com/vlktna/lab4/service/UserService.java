package com.vlktna.lab4.service;

import com.vlktna.lab4.model.User;
import com.vlktna.lab4.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder encoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder encoder){
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    public User findByUsername(String name) {
        return userRepository.findByUsername(name);
    }

    @Transactional
    public void save(User user){
        user.setPassword(encoder.encode(user.getPassword()));
        userRepository.save(user);
    }
}