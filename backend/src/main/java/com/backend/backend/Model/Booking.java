package com.backend.backend.Model;

import java.util.Date;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Booking {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long booking_id;
    private String location;
    private Date booking_date;
    private boolean bookingstatus=false,Paymentstatus=false;

    // @ManyToOne(cascade = CascadeType.ALL)
    // private User user;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "event_id", referencedColumnName ="id")
    private Events event;
    
    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "manager_id", referencedColumnName ="id")
    private Manager manager;

}
