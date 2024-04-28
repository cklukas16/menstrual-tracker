package edu.stthomas.menstrualtracker.repository;

import org.springframework.data.repository.ListCrudRepository;

import edu.stthomas.menstrualtracker.model.Cycle;

public interface CycleRepository extends ListCrudRepository<Cycle, Integer> {


} 
