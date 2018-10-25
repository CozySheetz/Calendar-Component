CREATE DATABASE IF NOT EXISTS;
USE calendar;

CREATE TABLE IF NOT EXISTS listings(
  ID INT NOT NULL AUTO_INCREMENT,
  listing_address VARCHAR(150) NOT NULL,
  minimum_nights INT DEFAULT 1,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS bookings(
    ID INT NOT NULL AUTO_INCREMENT,
    listings_ID INT,
    Start_Date DATE, 
    End_Date DATE,
    YEAR(4) with a range of '2018' to '2155',

    FOREIGN KEY listings_ID REFERENCES listings(ID)
);

