package com.backend.backend.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.backend.Model.Events;
import com.backend.backend.Repository.EventsRepo;

@Service
public class EventService {
    
    @Autowired
    private EventsRepo everepo;

    public List<Events> getEvents(){
        return everepo.findAll();
    }

    public Events getEventById(long id){
        return everepo.findById(id);
    }

    public Events postEvent(Events data)
    {
        return everepo.save(data);
    }

    public Events updateEvent(Events data)
    {
        return everepo.save(data);
    }

    public void deleteEvent(long id)
    {
        everepo.deleteById(id);
    }


}
