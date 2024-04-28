package edu.stthomas.menstrualtracker.model;

import java.time.LocalDate;
import java.util.Objects;

import org.springframework.data.annotation.Id;

public record Cycle(

        @Id Integer id,
        CycleData[] allDays) {

    public record CycleData(

            LocalDate date,
            int counter) {
        public CycleData {
            Objects.requireNonNull(date, "Date cannot be null");
            if (counter < 0) {
                throw new IllegalArgumentException("Counter cannot be negative");
            }
        }
    }

    public Cycle {
        Objects.requireNonNull(allDays, "allDays cannot be null");
        for (CycleData cycleData : allDays) {
            Objects.requireNonNull(cycleData, "cycleData cannot be null");
        }
    }
}
