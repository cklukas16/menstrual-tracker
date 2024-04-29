package edu.stthomas.menstrualtracker.repository;

import org.springframework.data.repository.ListCrudRepository;

import edu.stthomas.menstrualtracker.model.MyCycle;

public interface CycleRepository extends ListCrudRepository<MyCycle, Integer> {


} 
