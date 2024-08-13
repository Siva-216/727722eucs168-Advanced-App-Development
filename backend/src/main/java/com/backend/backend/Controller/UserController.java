package com.backend.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.backend.backend.Model.User;
import com.backend.backend.Service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;





@RestController
public class UserController {
    
    @Autowired
    private UserService usrservice;

    @GetMapping("/UserDatas")
    public List<User> getuserDatas() {
        return usrservice.getuserDatas();
    }

    @GetMapping("/UserDatas/{id}")
    public User getUserById(@PathVariable long id) {
        return usrservice.getUserById(id);
    }

    @PostMapping("/InsertUser")
    public User postuserData(@RequestBody User data) {
        return usrservice.postuserData(data);
    }

    // @PutMapping("/InsertNewEvent/{event_id}/{manager_id}")
    // public User postNewEvents(@RequestBody User data, @PathVariable long event_id, @PathVariable long manager_id) {
    //     return usrservice.postNewEvent(data, event_id, manager_id);
    // }

    @PutMapping("/AppointAdmin")
    public List<User> AppointAdmin(@RequestBody User user) {
        return usrservice.AppointAdmin(user);
    }

    @PutMapping("/UpdateUser")
    public User updateUserData(@RequestBody User data) {
        return usrservice.updateUserData(data);
    }

    @DeleteMapping("/DeleteUser/{id}")
    public void deleteUserData(@PathVariable long id) {
        usrservice.deleteUserData(id);
    }

    // @GetMapping("/UserLogin/{username}{password}")
    // public String UserLoginMethod(@RequestParam String Username, @RequestParam String Password) {
    //     usrservice.UserLogin(Username, Password);
    //     return new String();
    // }
    
    
}
