DROP DATABASE IF EXISTS apartments;
CREATE DATABASE apartments;
USE apartments;

CREATE TABLE buildings(
    building_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    address VARCHAR(256) NOT NULL,
    building_name VARCHAR(256),
    management_company VARCHAR(256),
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    amenity_gym BIT,
    amenity_pool BIT,
    amenity_study BIT,
    amenity_sauna BIT,
    amenity_parking BIT,
    amenity_patio BIT,
    amenity_pets BIT
);

CREATE TABLE leases(
    lease_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    building_id INT FOREIGN KEY NOT NULL,
    price INT NOT NULL,
    num_beds INT,
    num_baths INT
    date_signed DATE,
    lease_length INT,
    feature_laundry BIT,
    feature_dishwasher BIT,
    feature_internet BIT,
    feature_tv BIT,
    feature_microwave BIT,
    featue_stove BIT
);