package com.backend.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.backend.Model.Booking;
import com.backend.backend.Model.Events;
import com.backend.backend.Model.Manager;
import com.backend.backend.Model.User;
import com.backend.backend.Repository.BookingRepo;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingrepo;

    @Autowired 
    private EventService eventservice;

    @Autowired
    private ManagerService managerservice;

    @Autowired
    private UserService userservice;


    public List<Booking> getBookingDatas() {
        return bookingrepo.findAll();
    }

    public Optional<Booking> getBookingById(long id) {
        return bookingrepo.findById(id);
    }

    public Booking postBookingData(long usr_id,long eve_id,long mana_id,Booking data) {
        User getusr = userservice.getUserById(usr_id);
        Events geteve = eventservice.getEventById(mana_id);
        Manager getmana = managerservice.getManagerById(mana_id);
        data.setUser(getusr);
        data.setEvent(geteve);
        data.setManager(getmana);
        return bookingrepo.save(data);
    }

    public Booking putBookingData(Booking data) {
        return bookingrepo.save(data);
    }

    public void deleteBookingData(long id) {
        bookingrepo.deleteById(id);
    }

    public List<Booking> getBookbyUserId(long id){
        return bookingrepo.getBookbyUsrId(id);
    }

    public void paymentdonesucess(long id)
    {
        bookingrepo.paymentdonesucess(id);
    }

    public List<Booking> GetNotConfirm(long m_id){
        return bookingrepo.GetNotConfirm(m_id);
    }
}
