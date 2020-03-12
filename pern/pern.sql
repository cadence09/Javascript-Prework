--  CREATE TABLE species (
-- 	 id SERIAL PRIMARY KEY,
--  	name text NOT NULL,
-- 	species_id integer NOT NULL,
--   	number_living integer NOT NULL,
--  	status_code text NOT NULL,
--  	date_record TIMESTAMP DEFAULT CURRENT_TIMESTAMP
--   );

--  CREATE TABLE animals (
--   	id SERIAL PRIMARY KEY,
--   	animals_id integer NOT NULL,
--   	nickname text NOT NULL,
--   	species text NOT NULL,
--   	date_record TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

--  CREATE TABLE sightings (
-- 	id SERIAL PRIMARY KEY,
-- 	animal_id integer NOT NULL,
-- 	individual_seen text NOT NULL,
--  	location text NOT NULL,
--   	healthcondition text NOT NULL,
--  	email text NOT NULL
--);

--ALTER TABLE species ADD species_id integer;
-- INSERT species
-- INSERT INTO species (name, species_id,number_living, status_code) VALUES ('POLAR BEAR',1,500, 'CR');
-- INSERT INTO species (name,species_id, number_living, status_code) VALUES ('Tiger',2,1000, 'EN');
-- INSERT INTO species (name,species_id,number_living, status_code) VALUES ('Leopard',3, 500, 'CR');

--INSERT animals
-- INSERT INTO animals (animals_id,nickname, species) VALUES (1,'Spectacled Bear', 'POLAR BEAR');
-- INSERT INTO animals (animals_id,nickname, species) VALUES (2,'Sun Bear', 'Polar Bear');
-- INSERT INTO animals (animals_id,nickname,species) VALUES (3,'Siberian tigers', 'tiger');
--  INSERT INTO animals (animals_id,nickname,species) VALUES (4,'Indochinese tiger', 'tiger');
--  INSERT INTO animals (animals_id,nickname, species) VALUES (5,'Amur leopard', 'Leopard');
--  INSERT INTO animals (animals_id,nickname, species) VALUES (6,'African leopard', 'Leopard');


SELECT * FROM sightings;
--DROP TABLE animals;
