-- selects users table to insert mock data --
SELECT * FROM nicecity.users;

-- users table seed with 6 mock entries --
INSERT INTO Users (id, email, password, firstName, lastName, userName, userPhoto, createdAt, updatedAt) 
VALUES (1, "neighbour@neighbour.com", "1234", "john", "doe", "johnDoe", 0 , current_timestamp(), current_timestamp());

INSERT INTO Users (id, email, password, firstName, lastName, userName, userPhoto, createdAt, updatedAt) 
VALUES (2, "hello@neighbour.com", "4321", "jane", "doe", "janeDoe", 0 , current_timestamp(), current_timestamp());

INSERT INTO Users (id, email, password, firstName, lastName, userName, userPhoto, createdAt, updatedAt) 
VALUES (3, "hi@neighbour.com", "12345", "tom", "jones", "tomJones", 0 , current_timestamp(), current_timestamp());

INSERT INTO Users (id, email, password, firstName, lastName, userName, userPhoto, createdAt, updatedAt) 
VALUES (4, "good@neighbour.com", "54321", "lisa", "jones", "lisaJones", 0 , current_timestamp(), current_timestamp());

INSERT INTO Users (id, email, password, firstName, lastName, userName, userPhoto, createdAt, updatedAt) 
VALUES (5, "happy@neighbour.com", "2345", "james", "smith", "jamesSmith", 0 , current_timestamp(), current_timestamp());

INSERT INTO Users (id, email, password, firstName, lastName, userName, userPhoto, createdAt, updatedAt) 
VALUES (6, "your@neighbour.com", "5432", "amy", "smith", "amySmith", 0 , current_timestamp(), current_timestamp());


