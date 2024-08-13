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

    @PostMapping("/InsertBooking/{usr_id}/{eve_id}/{mana_id}")
    public Booking postBookingData(@PathVariable long usr_id,@PathVariable long eve_id,@PathVariable long mana_id,@RequestBody Booking data){
        return bookingService.postBookingData(usr_id, eve_id, mana_id,data);
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

    @GetMapping("/BookingbyUserId/{id}")
    public List<Booking> getBookbyuserId(@PathVariable long id) {
        return bookingService.getBookbyUserId(id);
    }
    
    @PutMapping("PaymentDone/{id}")
    public void paymentdonesucess(@PathVariable long id) {
        bookingService.paymentdonesucess(id);
    }
    
    @GetMapping("/NotConfirmed/{m_id}")
    public List<Booking> GetNotConfirm(@PathVariable long m_id) {
        return bookingService.GetNotConfirm(m_id);
    }
}
