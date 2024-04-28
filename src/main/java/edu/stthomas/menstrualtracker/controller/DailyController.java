package edu.stthomas.menstrualtracker.controller;

import edu.stthomas.menstrualtracker.model.Daily;
import edu.stthomas.menstrualtracker.model.Level;
import edu.stthomas.menstrualtracker.repository.DailyRepository;
import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;


@RestController
@RequestMapping("/api/daily")
@CrossOrigin(origins = "http://localhost:4200")
public class DailyController {

    private final DailyRepository repository;

    public DailyController(DailyRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public List<Daily> findAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Daily findById(@PathVariable Integer id) {
        return repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Daily Content not found!"));
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    public void create(@Valid @RequestBody Daily daily) {
        if(repository.findByDate(daily.date()).isEmpty()){
            repository.save(daily);
        }
        else{
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "An entry with this date already exists.");
        }
    }
    
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    public void update(@Valid @RequestBody Daily daily, @PathVariable Integer id) {
        if(!repository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Content not found");
        }
        repository.save(daily);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        repository.deleteById(id);
    }

    @GetMapping("/filter/{date}")
    public List<Daily> findByDate(@PathVariable LocalDate date) {
        return repository.findByDate(date);
    }

    @GetMapping("/filter/level/{mood}")
    public List<Daily> findByMood(@PathVariable Level mood) {
        return repository.listByMood(mood);
    }
    
}
