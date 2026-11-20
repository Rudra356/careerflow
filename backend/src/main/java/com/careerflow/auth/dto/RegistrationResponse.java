
package com.careerflow.auth.dto;

import com.careerflow.user.Enums.Gender;
import com.careerflow.user.entity.User;

import java.time.Instant;
import java.util.UUID;

public record RegistrationResponse(
        UUID id,
        String firstName,
        String lastName,
        String email,
        Gender gender,
        Instant createdAt
) {

    public static RegistrationResponse from(User user) {
        return new RegistrationResponse(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getGender(),
                user.getCreatedAt()
        );
    }
}
