package org.example.service;

import org.example.entity.Vehicle;

import java.util.List;

public interface DataIngestionService {

    void saveVehicle(String make, String model, int year, String vin, double price, int quantity);

    void updateInventory(Long vehicleId, int quantitySold);

    List<Vehicle> getAll();
}
