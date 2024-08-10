package com.backend.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.backend.Model.Booking;
import com.backend.backend.Repository.BookingRepo;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingrepo;

    public List<Booking> getBookingDatas() {
        return bookingrepo.findAll();
    }

    public Optional<Booking> getBookingById(long id) {
        return bookingrepo.findById(id);
    }

    public Booking postBookingData(Booking data) {
        return bookingrepo.save(data);
    }

    public Booking putBookingData(Booking data) {
        return bookingrepo.save(data);
    }

    public void deleteBookingData(long id) {
        bookingrepo.deleteById(id);
    }
}
