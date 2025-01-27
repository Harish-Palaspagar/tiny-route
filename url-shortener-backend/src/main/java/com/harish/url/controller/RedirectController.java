package com.harish.url.controller;

import com.harish.url.models.UrlMapping;
import com.harish.url.service.UrlMappingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RedirectController {

    @Autowired
    private UrlMappingService urlMappingService;

    @GetMapping("/{shortUrl}")
    public ResponseEntity<Void> redirect(@PathVariable String shortUrl) {
        UrlMapping urlMapping = urlMappingService.getOriginalUrl(shortUrl);
        if (urlMapping != null) {
            return ResponseEntity.status(302)
                    .header("Location", urlMapping.getOriginalUrl())
                    .build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
