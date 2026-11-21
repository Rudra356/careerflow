package com.careerflow.auth.dto;

import com.careerflow.user.entity.User;

import java.util.UUID;

public record LoginResponse(

        UUID id,
        String firstName,
        String lastName,
        String email

) {
    public static LoginResponse from(User user) {
        return new LoginResponse(
                user.getId(), user.getFirstName(), user.getLastName(), user.getEmail()
        );
    }
}
