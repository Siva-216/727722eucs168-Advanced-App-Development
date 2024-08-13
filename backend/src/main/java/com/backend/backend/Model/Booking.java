package com.backend.backend.Model;

import java.util.Date;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Booking {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String location;
    private Date booking_date;
    private boolean bookingstatus=false,Paymentstatus=false;

    // @ManyToOne(cascade = CascadeType.ALL)
    // private User user;

    // @OneToMany(mappedBy = "booking",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    // private List<Events> event;
    
    // @OneToMany(mappedBy = "bookingm",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    // private List<Manager> manager;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "manager_id")
    private Manager manager;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "event_id")
    private Events event;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    



};
