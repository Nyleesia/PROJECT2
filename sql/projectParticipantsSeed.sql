-- selects projectparticipants table to insert mock data --
SELECT * FROM nicecity.projectparticipants;

-- projectparticipants table seed with 3 mock participants into each of 3 projects --

-- Beach Clean-up--
INSERT INTO projectparticipants (complete, createdAt, updatedAt, projectId, userId)  
VALUES (0, current_timestamp(), current_timestamp(), 3, 3);
INSERT INTO projectparticipants (complete, createdAt, updatedAt, projectId, userId)  
VALUES (0, current_timestamp(), current_timestamp(), 3, 5);
INSERT INTO projectparticipants (complete, createdAt, updatedAt, projectId, userId)  
VALUES (0, current_timestamp(), current_timestamp(), 3, 6);

-- New Year With Homeless--
INSERT INTO projectparticipants (complete, createdAt, updatedAt, projectId, userId)  
VALUES (0, current_timestamp(), current_timestamp(), 4, 3);
INSERT INTO projectparticipants (complete, createdAt, updatedAt, projectId, userId)  
VALUES (0, current_timestamp(), current_timestamp(), 4, 4);
INSERT INTO projectparticipants (complete, createdAt, updatedAt, projectId, userId)  
VALUES (0, current_timestamp(), current_timestamp(), 4, 6);

-- Fieldtrip to Senior Home--
INSERT INTO projectparticipants (complete, createdAt, updatedAt, projectId, userId)  
VALUES (0, current_timestamp(), current_timestamp(), 5, 3);
INSERT INTO projectparticipants (complete, createdAt, updatedAt, projectId, userId)  
VALUES (0, current_timestamp(), current_timestamp(), 5, 4);
INSERT INTO projectparticipants (complete, createdAt, updatedAt, projectId, userId)  
VALUES (0, current_timestamp(), current_timestamp(), 5, 5);