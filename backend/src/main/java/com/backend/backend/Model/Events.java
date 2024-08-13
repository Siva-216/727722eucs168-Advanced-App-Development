package com.backend.backend.Model;

import java.util.List;

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

    // @ManyToOne
    // @JoinColumn(name = "booking_id")
    // private Booking booking;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "booking_id")
    private List<Booking> book;


    
}
