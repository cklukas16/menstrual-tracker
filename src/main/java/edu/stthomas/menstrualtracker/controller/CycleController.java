package edu.stthomas.menstrualtracker.controller;

import edu.stthomas.menstrualtracker.model.MyCycle;
import edu.stthomas.menstrualtracker.repository.CycleRepository;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cycle")
@CrossOrigin
public class CycleController {

    private final CycleRepository repository;

    public CycleController(CycleRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public List<MyCycle> findAll() {
        return repository.findAll();
    }

}
