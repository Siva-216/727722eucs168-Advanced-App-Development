package com.backend.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.backend.Model.Events;


@Repository
public interface EventsRepo extends JpaRepository<Events,Long>
{
    Events findById(long id);
}
