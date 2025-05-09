package org.example.controller;


import org.example.entity.Sale;
import org.example.entity.Vehicle;
import org.example.service.SalesReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/sales")
@CrossOrigin("*")
public class SalesReportController {

    @Autowired
    private SalesReportService salesReportService;

    @GetMapping("/total-revenue")
    public double getTotalRevenue() {
        return salesReportService.calculateTotalRevenue();
    }

    @GetMapping("/daily-report")
    public Map<Date, Double> getDailySalesReport() {
        return salesReportService.generateDailySalesReport();
    }


    @PostMapping("/salesAdd")
    public Sale addSale(@RequestBody Sale sale) {
        return salesReportService.addSale(sale);
    }

    @GetMapping("sale/all")
    public List<Sale> getAllSale() {
        return salesReportService.getAllSale();
    }

}
