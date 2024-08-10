package com.backend.backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.backend.backend.Model.Manager;
import com.backend.backend.Service.ManagerService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
public class ManagerController {
    
    @Autowired
    private ManagerService manservice;

    @GetMapping("/ManagerDatas")
    public List<Manager> getManagerDatas() {
        return manservice.getManagerDatas();
    }
    
    @GetMapping("/ManagerData/{id}")
    public Optional<Manager> getManagerById(@PathVariable long id) {
        return manservice.getManagerById(id);
    }

    @PostMapping("/InsertManager")
    public Manager postManagerData(@RequestBody Manager data) {
        return manservice.postManagerData(data);
    }
    
    @PutMapping("/UpdateManager")
    public Manager putManagerdata(@RequestBody Manager data) {
        return manservice.putManagerData(data);
    }

    @DeleteMapping("/DeleteManager/{id}")
    public String deleteManagerdata(@PathVariable long id)
    {
        manservice.deleteManagerData(id);
        return "Deleted Sucessfully";
    }
}
