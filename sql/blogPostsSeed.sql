-- selects blogposts table to insert mock data --
SELECT * FROM nicecity.blogposts;

-- blogposts table seed with 4 mock entries --
INSERT INTO blogposts (userName, blogPhoto, blogPost, createdAt, updatedAt, UserId) 
VALUES ("johnDoe", 0, "Hello to all my new neighbours.", current_timestamp(), current_timestamp(), 1);

INSERT INTO blogposts (userName, blogPhoto, blogPost, createdAt, updatedAt, UserId) 
VALUES ("janeDoe", 0, "I like helping my neighbours to make our neighbourhood better.", current_timestamp(), current_timestamp(), 2);

INSERT INTO blogposts (userName, blogPhoto, blogPost, createdAt, updatedAt, UserId) 
VALUES ("tomJones", 0, "I have a passion for environmental issues", current_timestamp(), current_timestamp(), 3);

INSERT INTO blogposts (userName, blogPhoto, blogPost, createdAt, updatedAt, UserId) 
VALUES ("lisaJones", 0, "I enjoy helping animals.", current_timestamp(), current_timestamp(), 4);

