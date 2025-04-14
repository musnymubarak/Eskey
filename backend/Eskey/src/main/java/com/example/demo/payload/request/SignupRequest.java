package com.example.demo.payload.request;

import java.util.Set;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class SignupRequest {

		@NotBlank
		@Size(max=50)
		@Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}")
		private String username;
		
		private Set<String> role;
		@NotBlank
		@Size(min=6,max=40)
		private String password;
		
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username=username;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password=password;
		}
		public Object getEmail() {
			// TODO Auto-generated method stub
			return null;
		}
		public Set<String> getRole() {
			return role;
		}
		public void setRole(Set<String> role) {
			this.role = role;
		}
		

	}


