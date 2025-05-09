package org.example.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long saleId;

    @ManyToOne
    @JoinColumn(name = "id")
    private Vehicle vehicle;

    private Long customerId;
    private Date saleDate;
    private double price;

    // Getters and setters
    // Constructor(s)
    // Additional methods as needed
}
