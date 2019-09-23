// selects projects table to insert mock data --
SELECT * FROM nicecity.blogcomments;

// -- blogComments table seed with 5 mock entries --
INSERT INTO blogcomments (comment, likes, dislikes, createdAt, updatedAt, commenterId, BlogPostId)  
VALUES ("I really like this", 2, 0, current_timestamp(), current_timestamp(),1, 3);

INSERT INTO blogcomments (comment, likes, dislikes, createdAt, updatedAt, commenterId, BlogPostId)  
VALUES ("I am interested", 4, 1, current_timestamp(), current_timestamp(),2, 2);

INSERT INTO blogcomments (comment, likes, dislikes, createdAt, updatedAt, commenterId, BlogPostId)  
VALUES ("This is good", 3, 0, current_timestamp(), current_timestamp(),1, 2);

INSERT INTO blogcomments (comment, likes, dislikes, createdAt, updatedAt, commenterId, BlogPostId)  
VALUES ("Nice", 1, 0, current_timestamp(), current_timestamp(),2, 1);

INSERT INTO blogcomments (comment, likes, dislikes, createdAt, updatedAt, commenterId, BlogPostId)  
VALUES ("Way to go", 2, 0, current_timestamp(), current_timestamp(),1, 3);
