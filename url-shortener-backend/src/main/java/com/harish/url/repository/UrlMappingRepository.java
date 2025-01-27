package com.harish.url.repository;

import com.harish.url.models.UrlMapping;
import com.harish.url.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UrlMappingRepository extends JpaRepository<UrlMapping, Long> {

    UrlMapping findByShortUrl(String shortUrl);

    List<UrlMapping> findByUser(User user);

}
