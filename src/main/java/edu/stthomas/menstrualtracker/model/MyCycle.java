package edu.stthomas.menstrualtracker.model;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.annotation.Id;

public record MyCycle(
    @Id Integer id,
    List<Day> allDays
){
    public record Day(
        int counter,
        LocalDate date
    ){
    }
}
