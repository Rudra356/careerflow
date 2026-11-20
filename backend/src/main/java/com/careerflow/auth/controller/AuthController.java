package com.careerflow.auth.controller;

import com.careerflow.auth.dto.RegistrationRequest;
import com.careerflow.auth.dto.RegistrationResponse;
import com.careerflow.user.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<RegistrationResponse> register(@Valid @RequestBody RegistrationRequest registrationRequest) {
        RegistrationResponse registrationResponse = userService.registerUser(registrationRequest);
        if (registrationResponse!=null) {
            return new ResponseEntity<>(registrationResponse, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(registrationResponse, HttpStatus.NOT_ACCEPTABLE);
    }
}
