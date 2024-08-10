package com.backend.backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.backend.backend.Model.Booking;
import com.backend.backend.Service.BookingService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
public class BookingController {
    
    @Autowired
    private BookingService bookingService;

    @GetMapping("/Booking")
    public List<Booking> getBookingDatas() {
        return bookingService.getBookingDatas();
    }

    @GetMapping("/Booking/{id}")
    public Optional<Booking> getBookingData(@PathVariable long id) {
        return bookingService.getBookingById(id);
    }

    @PostMapping("/InsertBooking")
    public Booking postBookingData(@RequestBody Booking data) {
        return bookingService.postBookingData(data);
    }

    @PutMapping("/UpdateBooking")
    public Booking putBookingData(@RequestBody Booking data) {
        return bookingService.putBookingData(data);
    }
    
    @DeleteMapping("/DeleteBooking/{id}")
    public void deleteBookingData(@PathVariable long id)
    {
        bookingService.deleteBookingData(id);
    }
    
    

}
