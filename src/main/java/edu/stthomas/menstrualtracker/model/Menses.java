package edu.stthomas.menstrualtracker.model;

import java.time.LocalDate;
import org.springframework.data.annotation.Id;

public record Menses(
    @Id Integer id,
    LocalDate start,
    LocalDate finish
) {
}
