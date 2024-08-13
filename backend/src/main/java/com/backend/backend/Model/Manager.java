package com.backend.backend.Model;

import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Manager {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private String name,email,password,gender,mobno,address;
    private double experience=0,rating=0;
    private Boolean request=false,ismana=false,jobsend=false;
    private Double salary = 0.0;

    // @ManyToOne
    // @JoinColumn(name = "booking_id")
    // private Booking bookingm;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "booking_id")
    private List<Booking> book;
}
