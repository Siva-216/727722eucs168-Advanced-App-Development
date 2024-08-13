package com.backend.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.backend.Model.User;
import com.backend.backend.Repository.UserRepo;

@Service
public class UserService {
    
    @Autowired
    private UserRepo usrepo;

    public List<User> getuserDatas()
    {
        return usrepo.findAll();
    }

    public User getUserById(long id)
    {
        return usrepo.findById(id);
    }

    public User postuserData(User data)
    {
        // List<Booking> bookings = new ArrayList<Booking>();
        // bookings.add(new Booking());
        // data.setBookingList(bookings);
        return usrepo.save(data);
    }

    public User updateUserData(User data)
    {
        return usrepo.save(data);
    }

    public void deleteUserData(long id)
    {
        usrepo.deleteById(id);
    }

    public List<User> AppointAdmin(User user){

        user.setAdmin(true);
        usrepo.save(user);
        return usrepo.findAll();

    }
    
    
    // public User postNewEvent(User user,long event_id,long manager_id) {
        
    //     Events nEvents = eventsRepo.findById(event_id);
    //     Manager nManager = managerR.findById(manager_id);
        
    //     List<Booking> nBookingList = user.getBookingList();
    //     Booking newBooking = new Booking();

    //     List<Events> nEventsList2 = new ArrayList<Events>();
    //     List<Manager> nManagerList2 = new ArrayList<Manager>();

    //     nEventsList2.add(nEvents);
    //     nManagerList2.add(nManager);

    //     newBooking.setEvent(nEventsList2);
    //     newBooking.setManager(nManagerList2);
    //     nBookingList.add(newBooking);

    //     user.setBookingList(nBookingList);

    //     return usrepo.save(user);
        
    // }

}
