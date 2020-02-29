CREATE DATABASE database_links;

USE database_links;

-- USERS TABLE
CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL
);

CREATE TABLE users_google(
    id INT(30) NOT NULL,
    email VARCHAR(50) NOT NULL
);

CREATE TABLE users_facebook(
    id INT(30) NOT NULL,
    email VARCHAR(50) NOT NULL
);

CREATE TABLE method(
    enum VARCHAR(10) NOT NULL
);

INSERT INTO method (enum) VALUES ("google");
INSERT INTO method (enum) VALUES ("facebook");
INSERT INTO method (enum) VALUES ("local");

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users_google
    MODIFY id VARCHAR(50) NOT NULL;

ALTER TABLE users
    MODIFY username VARCHAR(50) NOT NULL;

ALTER TABLE users
    CHANGE username email VARCHAR(50) NOT NULL;

ALTER TABLE users_google
    ADD method VARCHAR(10) NOT NULL;

ALTER TABLE users_facebook
    ADD method VARCHAR(10) NOT NULL;

DESCRIBE users;

SELECT id FROM users ORDER BY id DESC LIMIT 1;


