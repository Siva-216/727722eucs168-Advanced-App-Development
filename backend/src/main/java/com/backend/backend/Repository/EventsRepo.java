package com.backend.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.backend.Model.Events;

public interface EventsRepo extends JpaRepository<Events,Long>
{
    
}
