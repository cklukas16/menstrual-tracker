package edu.stthomas.menstrualtracker.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

public record Daily (
        @Id   
        Integer id,
        //@Column(value = "dateAdded")    // avoids Postgres reserved word
        LocalDate dateAdded,
        //@Column(value = "weightLbs")    // avoids Postgres reserved word
        double weightLbs,
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