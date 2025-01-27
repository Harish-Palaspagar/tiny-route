package com.harish.url.repository;

import com.harish.url.models.ClickEvent;
import com.harish.url.models.UrlMapping;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ClickEventRepository extends JpaRepository<ClickEvent, Long> {

    List<ClickEvent> findByUrlMappingAndClickDateBetween
            (UrlMapping mapping,
             LocalDateTime startDate,
             LocalDateTime endDate);

    List<ClickEvent> findByUrlMappingInAndClickDateBetween
            (List<UrlMapping> urlMappings,
             LocalDateTime startDate,
             LocalDateTime endDate);

}
