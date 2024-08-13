package com.backend.backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.backend.backend.Model.Booking;

import jakarta.transaction.Transactional;

public interface BookingRepo extends JpaRepository<Booking,Long>{

    @Query(value = "Select * from Booking where user_id =:u_id",nativeQuery = true )
    List<Booking> getBookbyUsrId(long u_id);

    @Modifying
    @Transactional
    @Query(value = "UPDATE Booking SET paymentstatus = true WHERE id = :b_id", nativeQuery = true)
    void paymentdonesucess(long b_id);


    @Query(value = "Select * from Booking where bookingstatus = false and manager_id = :m_id",nativeQuery = true)
    List<Booking> GetNotConfirm(long m_id);
}
