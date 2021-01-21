package com.vlktna.lab4.controller;

import com.vlktna.lab4.model.User;
import com.vlktna.lab4.securityUtils.Token;
import com.vlktna.lab4.service.ImplUserDetailsService;
import com.vlktna.lab4.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class AuthorizationController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final ImplUserDetailsService userDetailsService;
    private final Token tokenUtil;

    @Autowired
    public AuthorizationController(UserService userService, AuthenticationManager authenticationManager,
                          ImplUserDetailsService userDetailsService, Token tokenUtil) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.tokenUtil = tokenUtil;
    }

    @PostMapping("/authentication")
    public ResponseEntity<String> createAuthToken(@RequestBody User user) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );
        }
        catch (BadCredentialsException e) {
            return new ResponseEntity<>("Wrong login or password", HttpStatus.UNAUTHORIZED);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(user.getUsername());

        final String jwt = tokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(jwt);
    }

    @PostMapping("/registration")
    public ResponseEntity<String> register(@RequestBody User user) {
        if (userService.findByUsername(user.getUsername()) == null) {
            userService.save(user);
            return new ResponseEntity<>("Registration successful", HttpStatus.CREATED);
        }
        return new ResponseEntity<>("User exists", HttpStatus.CONFLICT);
    }
}
