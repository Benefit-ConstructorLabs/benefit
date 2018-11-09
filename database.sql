-- First delete the existing database
DROP DATABASE benefit;

-- Then create a new database
CREATE DATABASE benefit;

-- Switch inside the new database and insert this code
CREATE TABLE recipient
(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  photo VARCHAR(500) NOT NULL UNIQUE,
  tel VARCHAR(20) UNIQUE,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL
);

CREATE TABLE donor
(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL,
  tel VARCHAR(20) NOT NULL UNIQUE,
  stripe JSON NOT NULL
);

CREATE TABLE donation
(
  id SERIAL PRIMARY KEY,
  recipient_id INT,
  donor_id INT,
  amount INT NOT NULL,
  stripe_id VARCHAR(200) NOT NULL UNIQUE,
  FOREIGN KEY (recipient_id) REFERENCES recipient(id),
  FOREIGN KEY (donor_id) REFERENCES donor(id)
);

CREATE TABLE biography
(
  id SERIAL PRIMARY KEY,
  recipient_id INT,
  bio_1 TEXT,
  bio_2 TEXT,
  bio_3 TEXT,
  FOREIGN KEY (recipient_id) REFERENCES recipient(id)
);


INSERT INTO recipient
  (id, first_name, last_name, photo, tel, username, password)
VALUES
  (1, 'John', 'Smith', 'https://randomuser.me/api/portraits/men/33.jpg', '01234567890', 'jsmith', '111');
INSERT INTO recipient
  (id, first_name, last_name, photo, tel, username, password)
VALUES
  (2, 'Anna', 'Boolean', 'https://randomuser.me/api/portraits/women/54.jpg', '23456789012', 'aboolean', '222');
INSERT INTO recipient
  (id, first_name, last_name, photo, tel, username, password)
VALUES
  (3, 'Sam', 'Dean', 'https://randomuser.me/api/portraits/men/82.jpg', '9876543221678', 'sdean', '333');
ALTER SEQUENCE recipient_id_seq RESTART WITH 4 INCREMENT BY 1;

INSERT INTO donor
  (id, first_name, last_name, email, password, tel, stripe)
VALUES
  (1, 'Anon', 'Anonymous', 'anon@anonymous.com', '123', '02345678989', '{
  "stripe": "Some stripe stuff"
  }');
INSERT INTO donor
  (id, first_name, last_name, email, password, tel, stripe)
VALUES
  (2, 'Bill', 'Gates', 'bill@gates.com', 'Apple', '07850123368', '{
  "stripe": "Some more stripe stuff"
  }');
ALTER SEQUENCE donor_id_seq RESTART WITH 3 INCREMENT BY 1;

INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id)
VALUES
  (1, 1, 1, 500, 'serfvboiuygtfdfghj3456');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id)
VALUES
  (2, 1, 2, 5000, 'asdfghjk2345678');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id)
VALUES
  (3, 2, 1, 508, '2345678g');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id)
VALUES
  (4, 2, 2, 260, '98765rertyhj');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id)
VALUES
  (5, 3, 1, 3132, 'oiuytfghjkmn');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id)
VALUES
  (6, 3, 2, 9987, 'aiuytrerfg5t8');
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
