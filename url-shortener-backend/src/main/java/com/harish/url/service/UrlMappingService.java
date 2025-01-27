package com.harish.url.service;

import com.harish.url.dtos.ClickEventDto;
import com.harish.url.dtos.UrlMappingDTO;
import com.harish.url.models.ClickEvent;
import com.harish.url.models.UrlMapping;
import com.harish.url.models.User;
import com.harish.url.repository.ClickEventRepository;
import com.harish.url.repository.UrlMappingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class UrlMappingService {

    @Autowired
    private UrlMappingRepository urlMappingRepository;

    @Autowired
    private ClickEventRepository clickEventRepository;

    public UrlMappingDTO createShortUrl(String originalUrl, User user) {
        String shortUrl = generateShortUrl();
        UrlMapping urlMapping = new UrlMapping();
        urlMapping.setShortUrl(shortUrl);
        urlMapping.setOriginalUrl(originalUrl);
        urlMapping.setUser(user);
        urlMapping.setCreatedDate(LocalDateTime.now());
        UrlMapping savedUrlMapping = urlMappingRepository.save(urlMapping);
        return convertToDto(savedUrlMapping);
    }

    private UrlMappingDTO convertToDto(UrlMapping urlMapping) {
        UrlMappingDTO urlMappingDTO = new UrlMappingDTO();
        urlMappingDTO.setId(urlMapping.getId());
        urlMappingDTO.setOriginalUrl(urlMapping.getOriginalUrl());
        urlMappingDTO.setShortUrl(urlMapping.getShortUrl());
        urlMappingDTO.setClickCount(urlMapping.getClickCount());
        urlMappingDTO.setCreatedDate(urlMapping.getCreatedDate());
        urlMappingDTO.setUsername(urlMapping.getUser().getUsername());
        return urlMappingDTO;
    }

    private String generateShortUrl() {

        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        Random random = new Random();
        StringBuilder shortUrl = new StringBuilder(8);
        for (int i = 0; i < 8; i++) {
            shortUrl.append(characters.charAt(random
                    .nextInt(characters.length())));
        }
        return shortUrl.toString();

    }


    public List<UrlMappingDTO> getUrlsByUser(User user) {
        return urlMappingRepository.findByUser(user)
                .stream().map(this::convertToDto)
                .toList();
    }

    public List<ClickEventDto> getClickEventsByDate(String shortUrl, LocalDateTime start, LocalDateTime end) {

        UrlMapping urlMapping = urlMappingRepository.findByShortUrl(shortUrl);
        if (urlMapping != null) {
            return clickEventRepository
                    .findByUrlMappingAndClickDateBetween(urlMapping, start, end)
                    .stream()
                    .collect(Collectors
                            .groupingBy(click -> click
                                    .getClickDate().toLocalDate(), Collectors.counting()))
                    .entrySet().stream().map(entry -> {
                        ClickEventDto clickEventDto = new ClickEventDto();
                        clickEventDto
                                .setClickDate(entry.getKey());
                        clickEventDto.setCount(entry.getValue());
                        return clickEventDto;
                    }).collect(Collectors.toList());
        }
        return null;
    }

    public Map<LocalDate, Long> getTotalClicksByUserAndDate
            (User user, LocalDate start, LocalDate end) {
        List<UrlMapping> urlMappings = urlMappingRepository
                .findByUser(user);
        List<ClickEvent> clickEvents = clickEventRepository
                .findByUrlMappingInAndClickDateBetween(urlMappings, start.atStartOfDay(),
                        end.plusDays(1).atStartOfDay());
        return clickEvents.stream()
                .collect(Collectors
                        .groupingBy(click -> click.getClickDate().toLocalDate(),
                                Collectors.counting()));

    }

    public UrlMapping getOriginalUrl(String shortUrl) {
        UrlMapping mapping = urlMappingRepository
                .findByShortUrl(shortUrl);
        if (mapping != null) {
            mapping.setClickCount(mapping.getClickCount() + 1);
            urlMappingRepository.save(mapping);

            ClickEvent clickEvent = new ClickEvent();
            clickEvent.setClickDate(LocalDateTime.now());
            clickEvent.setUrlMapping(mapping);
            clickEventRepository.save(clickEvent);

        }
        return mapping;
    }
}
