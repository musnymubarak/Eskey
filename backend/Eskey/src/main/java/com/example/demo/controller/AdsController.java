package com.example.demo.controller;

import com.example.demo.model.Ads;
import com.example.demo.repository.AdsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ads")
public class AdsController {

    @Autowired
    private AdsRepository adsRepository;

    // POST: Create a new ad
    @PostMapping("/post")
    public ResponseEntity<?> postAd(@RequestBody Ads ad) {
        ad.setDatePosted(LocalDate.now());
        ad.setIsAvailable(true);
        adsRepository.save(ad);
        return ResponseEntity.ok("Ad posted successfully");
    }

    // GET: Get all ads
    @GetMapping
    public ResponseEntity<List<Ads>> getAllAds() {
        List<Ads> adsList = adsRepository.findAll();
        return ResponseEntity.ok(adsList);
    }

    // GET: Get ad by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getAdById(@PathVariable Long id) {
        Optional<Ads> adOptional = adsRepository.findById(id);
        if (adOptional.isPresent()) {
            return ResponseEntity.ok(adOptional.get());
        } else {
            return ResponseEntity.status(404).body("Ad not found with ID: " + id);
        }
    }
}
