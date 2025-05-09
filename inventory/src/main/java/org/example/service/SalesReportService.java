package org.example.service;

import org.example.entity.Sale;
import org.example.entity.Vehicle;

import java.util.Date;
import java.util.List;
import java.util.Map;

public interface SalesReportService {
    double calculateTotalRevenue();

    Map<Date, Double> generateDailySalesReport();

    Sale addSale(Sale sale);

    List<Sale> getAllSale();
}
