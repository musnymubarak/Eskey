package com.example.demo.payload.request;

import java.util.Set;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class SignupRequest {

    @NotBlank
    @Size(max = 50)
    private String username;  // Username field (no @Email annotation)
    
    @NotBlank
    @Email  // Email field with proper email validation
    @Size(max = 100)
    private String email;  // Email field

    private Set<String> role;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;  // Return email field correctly
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<String> getRole() {
        return role;
    }

    public void setRole(Set<String> role) {
        this.role = role;
    }
}
