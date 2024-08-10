package com.backend.backend.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Events {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;
    private double amount;
    @Lob
    private String eveimg;
}
