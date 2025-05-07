package com.example.demo.controller;

import com.example.demo.model.Ads;
import com.example.demo.repository.AdsRepository;
import com.example.demo.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/ads")
public class AdsController {

    @Autowired
    private AdsRepository adsRepository;

    @PostMapping("/post")
    public ResponseEntity<?> postAd(@RequestBody Ads ad) {
        ad.setDatePosted(LocalDate.now());
        ad.setIsAvailable(true);
        adsRepository.save(ad);

        return ResponseEntity.ok("Ad posted successfully");
    }
}