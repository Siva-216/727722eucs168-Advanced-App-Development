package com.backend.backend.Model;

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
    private Boolean request=false;



    
}
