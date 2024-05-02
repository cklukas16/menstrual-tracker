package edu.stthomas.menstrualtracker.controller;

import edu.stthomas.menstrualtracker.model.Menses;
import edu.stthomas.menstrualtracker.repository.MensesRepository;
import jakarta.validation.Valid;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/menses")
@CrossOrigin
public class MensesController {

    private final MensesRepository repository;

    public MensesController(MensesRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public List<Menses> findAll() {
        return repository.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    public void create(@Valid @RequestBody Menses menses) {
        if(repository.findByStart(menses.start()).isEmpty()){
            repository.save(menses);
        }
        else{
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "An entry with this date already exists.");
        }
    }

}
