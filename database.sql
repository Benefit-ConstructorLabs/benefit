-- First delete the existing database
DROP DATABASE benefit;

-- Then create a new database
CREATE DATABASE benefit;

-- Switch inside the new database and insert this code
CREATE TABLE recipient(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  photo VARCHAR(500) NOT NULL UNIQUE,
  tel VARCHAR(20) UNIQUE,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL,
  type VARCHAR(20)
);

CREATE TABLE donor(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  photo VARCHAR(500) NOT NULL UNIQUE,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL,
  tel VARCHAR(20) NOT NULL UNIQUE,
  stripe JSON,
  type VARCHAR(20)
);

CREATE TABLE donation(
  id SERIAL PRIMARY KEY,
  recipient_id INT,
  donor_id INT,
  amount INT NOT NULL,
  stripe_id VARCHAR(200) NOT NULL,
  time_stamp TIMESTAMP WITH TIME ZONE,
  FOREIGN KEY (recipient_id) REFERENCES recipient(id),
  FOREIGN KEY (donor_id) REFERENCES donor(id)
);

CREATE TABLE biography(
  id SERIAL PRIMARY KEY,
  recipient_id INT,
  bio_1 TEXT,
  bio_2 TEXT,
  bio_3 TEXT,
  FOREIGN KEY (recipient_id) REFERENCES recipient(id)
);

INSERT INTO recipient 
  (id, first_name, last_name, photo, tel, username, password, type) 
  VALUES 
  (1, 'John', 'Smith', 'https://randomuser.me/api/portraits/men/33.jpg', '01234567890', 'jsmith', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', 'recipient');
INSERT INTO recipient 
  (id, first_name, last_name, photo, tel, username, password, type) 
  VALUES 
  (2, 'Anna', 'Boolean', 'https://randomuser.me/api/portraits/women/54.jpg', '23456789012', 'aboolean', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', 'recipient');
INSERT INTO recipient 
  (id, first_name, last_name, photo, tel, username, password, type) 
  VALUES 
  (3, 'Sam', 'Dean', 'https://randomuser.me/api/portraits/men/82.jpg', '9876543221678', 'sdean', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', 'recipient');
ALTER SEQUENCE recipient_id_seq RESTART WITH 4 INCREMENT BY 1;

INSERT INTO donor
  (id, first_name, last_name, photo, username, password, tel, stripe, type) 
  VALUES 
  (1, 'Anon', 'Anonymous', '/static/assets/images/donorplaceholder.jpg', 'anon@anonymous.com', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', '02345678989', '{
  "stripe": "Some stripe stuff"
  }', 'donor');
INSERT INTO donor
  (id, first_name, last_name, photo, username, password, tel, stripe, type) 
  VALUES 
  (2, 'Barry', 'Allen', 'https://randomuser.me/api/portraits/men/6.jpg', 'barry@flash.com', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', '07850123368', '{
  "stripe": "Some more stripe stuff"
  }', 'donor');
ALTER SEQUENCE donor_id_seq RESTART WITH 3 INCREMENT BY 1;

INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (1, 1, 1, 200, 'serfvboiuygtfdfghj3456', '2018-10-21T10:37:33.735972+01:00');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (2, 1, 2, 1000, 'asdfghjk2345678', '2018-10-22T10:37:33.735972+01:00');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (3, 2, 1, 500, '2345678g', '2018-10-12T10:37:33.735972+01:00');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (4, 2, 2, 300, '98765rertyhj', '2018-09-22T10:37:33.735972+01:00');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (5, 3, 1, 3000, 'oiuytfghjkmn', '2018-09-02T10:37:33.735972+01:00');
  INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (6, 3, 2, 9000, 'aiuytrerfg5t8', '2018-08-12T10:37:33.735972+01:00');
ALTER SEQUENCE donation_id_seq RESTART WITH 7 INCREMENT BY 1;

INSERT INTO biography
  (id, recipient_id, bio_1, bio_2, bio_3)
  VALUES
  (1, 1, 'I play the trumpet', 'I like black coffee', 'I am an Arsenal fan');
INSERT INTO biography
  (id, recipient_id, bio_1, bio_2, bio_3)
  VALUES
  (2, 2, 'I have 4 children', 'I like sci-fi', 'I enjoy reading');
INSERT INTO biography
  (id, recipient_id, bio_1, bio_2, bio_3)
  VALUES
  (3, 3, 'I make key charms', 'I am saving for a rent deposit', 'I like muffins');
ALTER SEQUENCE biography_id_seq RESTART WITH 4 INCREMENT BY 1;
