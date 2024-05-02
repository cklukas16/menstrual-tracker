FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/menstrual-tracker-0.0.1-SNAPSHOT.jar menstrual-tracker.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "menstrual-tracker.jar"]

# FROM openjdk:17.0.1-jdk-slim
# COPY --from=build /target/spring-backend-0.0.1-SNAPSHOT.jar spring-backend.jar
# EXPOSE 8080
# ENTRYPOINT ["java", "-jar", "spring-backend.jar"]