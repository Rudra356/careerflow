package com.careerflow.user.service;

import com.careerflow.auth.dto.RegistrationRequest;
import com.careerflow.auth.dto.RegistrationResponse;
import com.careerflow.user.entity.User;
import com.careerflow.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Locale;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public RegistrationResponse registerUser(RegistrationRequest request) {

        String email = request.email().toLowerCase(Locale.ROOT).trim();
        String rawPassword = request.password().trim();
        int passwordBytes = rawPassword.getBytes(StandardCharsets.UTF_8).length;

        if (userRepository.existsByEmail(email)) {
            throw new IllegalArgumentException(
                    "An account with this email already exists"
            );
        }

        if (passwordBytes > 72) {
            throw new IllegalArgumentException(
                    "Password must not exceed 72 UTF-8 bytes"
            );
        }

        User user = new User();

        user.setFirstName(request.firstName().trim());
        user.setLastName(request.lastName().trim());
        user.setEmail(email);
        user.setGender(request.gender());
        user.setPasswordHash(passwordEncoder.encode(rawPassword));
        user.setEnabled(true);
        User savedUser = userRepository.saveAndFlush(user);

        return RegistrationResponse.from(savedUser);
    }

}
