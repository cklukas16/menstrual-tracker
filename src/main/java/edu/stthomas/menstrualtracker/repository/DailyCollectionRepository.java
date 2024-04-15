package edu.stthomas.menstrualtracker.repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import edu.stthomas.menstrualtracker.model.Daily;
import edu.stthomas.menstrualtracker.model.Level;
import jakarta.annotation.PostConstruct;

import org.springframework.stereotype.Repository;

//This file can be deleted, we will use DailyRepository
@Repository
public class DailyCollectionRepository {
    
    private final List<Daily> dailyList = new ArrayList<>();

    public DailyCollectionRepository() {

    }

    public List<Daily> findAll() {
        return dailyList;
    }

    public Optional<Daily> findByDate(LocalDate date) {
        return dailyList.stream().filter(d -> d.date().equals(date)).findFirst();
    }

    public void save(Daily daily) {
        dailyList.removeIf(d -> d.date().equals(daily.date()));
        dailyList.add(daily);
    }

    public boolean existsByDate(LocalDate date) {
        return dailyList.stream().filter(d -> d.date().equals(date)).count() == 1;
    }

    public void delete(LocalDate date) {
        dailyList.removeIf(d -> d.date().equals(date));
    }

    @PostConstruct
    private void init() {
        Daily daily = new Daily(1, LocalDate.now(), 
        150.5,
        Level.THREE,
        Level.TWO,
        Level.ZERO,
        Level.ZERO,
        Level.FIVE,
        Level.FIVE,
        Level.FOUR,
        Level.TWO,
        Level.SIX,
        "testing comments");

        dailyList.add(daily);
    }
    
}