package com.backend.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.backend.Model.User;

public interface UserRepo  extends JpaRepository<User,Long>
{
    User findById(long id);
}
