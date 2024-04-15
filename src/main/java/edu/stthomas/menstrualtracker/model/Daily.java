package edu.stthomas.menstrualtracker.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;

public record Daily (
        @Id   
        Integer id,    
        LocalDate date,
        double weight,
        Level mood,
        Level bloating,
        Level cramps,
        Level headache,
        Level irritability,
        Level energy,
        Level anxiety,
        Level breast_tenderness,
        Level appetite,
        String comments
) {
}