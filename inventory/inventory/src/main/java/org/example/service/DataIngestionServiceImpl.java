package org.example.service;

import org.example.entity.Vehicle;
import org.example.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataIngestionServiceImpl implements DataIngestionService{

    @Autowired
    VehicleRepository vehicleRepository;

    @Override
    public void saveVehicle(String make, String model, int year, String vin, double price, int quantity) {
        Vehicle vehicle =new Vehicle();
        vehicle.setMake(make);
        vehicle.setModel(model);
        vehicle.setVin(vin);
        vehicle.setPrice(price);
        vehicle.setQuantity(quantity);
        vehicleRepository.save(vehicle);
    }

    @Override
    public void updateInventory(Long vehicleId, int quantitySold) {
        long id = vehicleId;
        Vehicle inventory = vehicleRepository.findById(id).orElseThrow(() -> new RuntimeException("Vehicle not found"));
        int currentQuantity = inventory.getQuantity();
        if (currentQuantity >= quantitySold) {
            inventory.setQuantity(currentQuantity - quantitySold);
            vehicleRepository.save(inventory);
        } else {
            throw new RuntimeException("Insufficient quantity in inventory");
        }
    }

    @Override
    public List<Vehicle> getAll() {
        return vehicleRepository.findAll();
    }


}
