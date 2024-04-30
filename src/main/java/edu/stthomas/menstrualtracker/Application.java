package edu.stthomas.menstrualtracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// import java.time.LocalDate;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.context.annotation.Bean;
// import edu.stthomas.menstrualtracker.model.Daily;
// import edu.stthomas.menstrualtracker.model.Level;
// import edu.stthomas.menstrualtracker.repository.DailyRepository;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	// @Bean
	// CommandLineRunner commandLineRunner(DailyRepository repository) {
	// 	return args -> {
	// 		// insert some data into the database
	// 		Daily daily = new Daily(null,LocalDate.now(),
	// 			155.5,
	// 			Level.THREE,
	// 			Level.TWO,
	// 			Level.ZERO,
	// 			Level.ZERO,
	// 			Level.FIVE,
	// 			Level.FIVE,
	// 			Level.FOUR,
	// 			Level.TWO,
	// 			Level.SIX,
	// 			"testing comments");

	// 		repository.save(daily);
	// 	};
	// }

}
