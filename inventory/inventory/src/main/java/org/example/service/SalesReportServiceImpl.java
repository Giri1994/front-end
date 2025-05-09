package org.example.service;

import org.example.entity.Sale;
import org.example.entity.Vehicle;
import org.example.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SalesReportServiceImpl implements SalesReportService {

    @Autowired
    private SaleRepository saleRepository;

    public double calculateTotalRevenue() {
        List<Sale> sales = saleRepository.findAll();
        return sales.stream().mapToDouble(Sale::getPrice).sum();
    }

    public Map<Date, Double> generateDailySalesReport() {
        List<Sale> sales = saleRepository.findAll();
        return sales.stream().collect(Collectors.groupingBy(Sale::getSaleDate, Collectors.summingDouble(Sale::getPrice)));
    }

    @Override
    public Sale addSale(Sale sale) {
        return saleRepository.save(sale);
    }

    @Override
    public List<Sale> getAllSale() {
        return saleRepository.findAll();
    }
}
