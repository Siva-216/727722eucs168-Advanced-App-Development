package com.backend.backend.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.backend.Model.Booking;
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

    public Optional<User> getUserById(long id)
    {
        return usrepo.findById(id);
    }

    public User postuserData(User data)
    {
        List<Booking> bookings = new ArrayList<Booking>();
        bookings.add(new Booking());
        data.setBookingList(bookings);
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
    
}
