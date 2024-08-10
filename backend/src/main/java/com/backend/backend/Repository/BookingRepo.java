package com.backend.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.backend.Model.Booking;

public interface BookingRepo extends JpaRepository<Booking,Long>{

}
