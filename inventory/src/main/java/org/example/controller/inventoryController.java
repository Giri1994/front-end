package org.example.controller;

import com.opencsv.CSVReader;
import org.example.entity.Vehicle;
import org.example.service.DataIngestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.StringReader;
import java.util.List;

@RestController
@CrossOrigin("*")
public class inventoryController {
    @Autowired
    private DataIngestionService dataIngestionService;

    @PostMapping("/data/ingest")
    public String ingestData(@RequestBody String csvData) {
        try (CSVReader reader = new CSVReader(new StringReader(csvData))) {
            String[] header = reader.readNext(); // Assuming the first row contains column headers
            if (header != null) {
                String[] nextLine;
                while ((nextLine = reader.readNext()) != null) {

                    // Assuming the CSV columns are in order: make, model, year, VIN, price, quantity
                    String make = nextLine[0];
                    String model = nextLine[1];
                    int year = Integer.parseInt(nextLine[2]);
                    String vin = nextLine[3];
                    double price = Double.parseDouble(nextLine[4]);
                    int quantity = Integer.parseInt(nextLine[5]);

                    // Call service method to save to database
                    dataIngestionService.saveVehicle(make, model, year, vin, price, quantity);
                }
                return "Data ingestion successful!";
            } else {
                return "No data found in CSV";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "Error ingesting data: " + e.getMessage();
        }
    }

    //updateInventory
    @PostMapping("/inventory/update")
    public String updateInventory(@RequestParam Long vehicleId, @RequestParam int quantitySold) {
        dataIngestionService.updateInventory(vehicleId, quantitySold);
        return "Inventory updated successfully";
    }

    @GetMapping("vehicle/all")
    public List<Vehicle> getAll() {
       return dataIngestionService.getAll();

    }



}
