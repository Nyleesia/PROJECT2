-- selects projects table to insert mock data --
SELECT * FROM nicecity.projects;

-- projects table seed with 5 mock entries --
INSERT INTO Projects (description, eventDate, eventTime, photo, capacity, participantCount, completed, createdAt, updatedAt, userId)  
VALUES ("Lets Decorate Our Community Park", date("2019-12-15 10:30:00"), time("2019-08-30 10:30:00"), 0, 30, 20, 1, current_timestamp(), current_timestamp(), 3);

INSERT INTO Projects (description, eventDate, eventTime, photo, capacity, participantCount, completed, createdAt, updatedAt, userId)  
VALUES ("Neighbourhood clean-up", date("2019-08-30 10:30:00"), time("2019-08-30 10:30:00"), 0, 30, 20, 1, current_timestamp(), current_timestamp(), 3);

INSERT INTO Projects (description, eventDate, eventTime, photo, capacity, participantCount, completed, createdAt, updatedAt, userId)  
VALUES ("Beach clean-up", date("2019-09-28 08:30:00"), time("2019-09-28 08:30:00"), 0, 15, 0, 0, current_timestamp(), current_timestamp(), 4);

INSERT INTO Projects (description, eventDate, eventTime, photo, capacity, participantCount, completed, createdAt, updatedAt, userId)  
VALUES ("Share the New Year with Our Homeless Neighbours", date("2020-01-01 16:00:00"), time("2020-01-01 16:00:00"), 0, 12, 2, 0, current_timestamp(), current_timestamp(), 5);

INSERT INTO Projects (description, eventDate, eventTime, photo, capacity, participantCount, completed, createdAt, updatedAt, userId)  
VALUES ("Keeping Company: Fieldtrip to a Senior Living Facitity", date("2019-10-15 09:30:00"), time("2019-10-15 09:30:00"), 0, 5, 5, 0, current_timestamp(), current_timestamp(), 6);
