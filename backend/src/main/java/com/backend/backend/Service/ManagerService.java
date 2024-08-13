package com.backend.backend.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.backend.Model.Manager;
import com.backend.backend.Repository.ManagerRepo;

@Service
public class ManagerService {

    @Autowired
    private ManagerRepo manrepo;

    public List<Manager> getManagerDatas() {
        return manrepo.findAll();
    }  
    
    public Manager getManagerById(long id) {
        return manrepo.findById(id);
    }

    public Manager postManagerData(Manager data)
    {
        return manrepo.save(data);
    }

    public Manager putManagerData(Manager data){
        return manrepo.save(data);
    }

    public void deleteManagerData(long id)
    {
        manrepo.deleteById(id);
    }
}
