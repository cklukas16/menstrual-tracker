package edu.stthomas.menstrualtracker.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.query.Param;

import edu.stthomas.menstrualtracker.model.Daily;
import edu.stthomas.menstrualtracker.model.Level;

import java.util.List;
import java.time.LocalDate;


public interface DailyRepository extends ListCrudRepository<Daily, Integer> {
    
    //Two Methods for Additional SQL Queries
    //(1) Query Derivation video 2:39
    List<Daily> findByDate(LocalDate dateAdded);

    //(2) Write own Query
    @Query("SELECT * FROM Daily WHERE mood = :mood")

    List<Daily> listByMood(@Param("mood") Level mood);

}
