package com.backend.backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.backend.backend.Model.Events;
import com.backend.backend.Service.EventService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
public class EventController {
    

    @Autowired
    private EventService eveservice;

    @GetMapping("/Events")
    public List<Events> getEvents() {
        return eveservice.getEvents();
    }

    @GetMapping("/Events/{id}")
    public Optional<Events> getEventById(@PathVariable long id) {
        return eveservice.getEventById(id);
    }

    @PostMapping("/InsertEvents")
    public Events postEvent(@RequestBody Events data) {
        return eveservice.postEvent(data);
    }

    @PutMapping("/UpdateEvent")
    public Events updateEvent(@RequestBody Events data) {
        return eveservice.updateEvent(data);
    }

    @DeleteMapping("/DeleteEvent/{id}")
    public void deleteEvent(@PathVariable long id) {
        eveservice.deleteEvent(id);
    }
    
    
}
