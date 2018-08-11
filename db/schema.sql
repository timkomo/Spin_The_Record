CREATE DATABASE records_db;
USE records_db;

CREATE TABLE records
(
id int NOT NULL AUTO_INCREMENT,
recrod_name varchar(255),
spun BOOLEAN default false,
`date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);