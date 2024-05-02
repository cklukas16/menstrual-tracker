package edu.stthomas.menstrualtracker.repository;

import org.springframework.data.repository.ListCrudRepository;

import edu.stthomas.menstrualtracker.model.Menses;
import java.util.List;
import java.time.LocalDate;


public interface MensesRepository extends ListCrudRepository<Menses, Integer> {

    
    List<Menses> findByStart(LocalDate start);
} 
