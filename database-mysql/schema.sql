DROP DATABASE calendar;
CREATE DATABASE IF NOT EXISTS calendar;
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
    PRIMARY KEY (ID),

    FOREIGN KEY (listings_ID) REFERENCES listings(ID)
);

-- SELECT listings.listing_address, listings.minimum_nights, bookings.ID, bookings.Start_Date, bookings.End_Date FROM listings INNER JOIN bookings ON bookings.listings_ID=listings.ID;

