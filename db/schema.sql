CREATE DATABASE burgers_db;

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(50),
devoured BOOLEAN,
the_date TIME,
PRIMARY KEY (id)
);