-- First delete the existing database
DROP DATABASE better_change;

-- Then create a new database
CREATE DATABASE better_change;

-- If you prefer to simply delete the tables instead of the whole database, user the code below: 
DROP TABLE biography;
DROP TABLE donation;
DROP TABLE donor;
DROP TABLE recipient;
DROP TABLE organisation;


-- Insert this code inside your better_change database
CREATE TABLE organisation(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  username VARCHAR(200) UNIQUE,
  password VARCHAR(200),
  type VARCHAR(20)
);

CREATE TABLE recipient(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  photo VARCHAR(500) NOT NULL UNIQUE,
  tel VARCHAR(30) UNIQUE,
  username VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL,
  type VARCHAR(20),
  organisation_id INT,
  reason VARCHAR(500),
  creation_date TIMESTAMP WITH TIME ZONE,
  FOREIGN KEY (organisation_id) REFERENCES organisation(id)
);

CREATE TABLE donor(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  photo VARCHAR(500) NOT NULL UNIQUE,
  username VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL,
  tel VARCHAR(30) NOT NULL UNIQUE,
  stripe JSON,
  creation_date TIMESTAMP WITH TIME ZONE,
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

INSERT INTO organisation
(id, name, username, password, type)
VALUES
(1, 'Macmillan Cancer Support', 'macmillan', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', 'organisation');
ALTER SEQUENCE organisation_id_seq RESTART WITH 2 INCREMENT BY 1;

INSERT INTO recipient 
  (id, first_name, last_name, photo, tel, username, password, type, organisation_id, reason,creation_date) 
  VALUES 
  (1, 'John', 'Smith', 'https://s3.eu-west-2.amazonaws.com/recipient-photo/man1.jpg', '01234567890', 'jsmith', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', 'recipient', 1, 'Raising funds for MacMillan Cancer Support', '2018-10-28T10:37:33.735972Z');
INSERT INTO recipient 
  (id, first_name, last_name, photo, tel, username, password, type, organisation_id, reason, creation_date) 
  VALUES 
  (2, 'Anna', 'Boolean', 'https://s3.eu-west-2.amazonaws.com/recipient-photo/woman1.jpg', '23456789012', 'aboolean', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', 'recipient', 1, 'Raising funds for MacMillan Cancer Support', '2018-10-20T10:37:33.735972Z');
INSERT INTO recipient 
  (id, first_name, last_name, photo, tel, username, password, type, organisation_id, reason, creation_date) 
  VALUES 
  (3, 'Sam', 'Dean', 'https://s3.eu-west-2.amazonaws.com/recipient-photo/man2.jpg', '9876543221678', 'sdean', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', 'recipient', 1, 'Raising funds for MacMillan Cancer Support', '2018-10-15T10:37:33.735972Z');
INSERT INTO recipient 
  (id, first_name, last_name, photo, tel, username, password, type, organisation_id, reason,  creation_date) 
  VALUES 
  (4, 'Sara', 'Peterson', 'https://s3.eu-west-2.amazonaws.com/recipient-photo/woman2.jpg', '4563728921', 'speterson', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', 'recipient', 1, 'Raising funds for MacMillan Cancer Support', '2018-11-10T10:37:33.735972Z');
INSERT INTO recipient 
  (id, first_name, last_name, photo, tel, username, password, type, organisation_id, reason, creation_date) 
  VALUES 
  (5, 'Wyatt', 'Holt', 'https://s3.eu-west-2.amazonaws.com/recipient-photo/man3.jpg', '647383221678', 'wholt', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', 'recipient', 1, 'Raising funds for MacMillan Cancer Support', '2018-11-15T10:37:33.735972Z');
ALTER SEQUENCE recipient_id_seq RESTART WITH 6 INCREMENT BY 1;

INSERT INTO donor
  (id, first_name, last_name, photo, username, password, tel, stripe, type, creation_date) 
  VALUES 
  (1, 'Anon', 'Anonymous', '/static/assets/images/donorplaceholder.jpg', 'anon@anonymous.com', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', '02345678989', '{
  "stripe": "Some stripe stuff"
  }', 'donor', '2018-10-21T10:37:33.735972Z');
INSERT INTO donor
  (id, first_name, last_name, photo, username, password, tel, stripe, type, creation_date) 
  VALUES 
  (2, 'Barry', 'Allen', 'https://s3.eu-west-2.amazonaws.com/recipient-photo/man4.jpg', 'barry@flash.com', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', '07850123368', '{
  "stripe": "Some more stripe stuff"
  }', 'donor', '2018-10-10T10:37:33.735972Z');
INSERT INTO donor
  (id, first_name, last_name, photo, username, password, tel, stripe, type, creation_date) 
  VALUES 
  (3, 'Kenzi', 'Riley', 'https://s3.eu-west-2.amazonaws.com/recipient-photo/woman3.jpg', 'kenzi@riley.com', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', '9876523', '{
  "stripe": "Some stripe stuff €#¢∞§¶"
  }', 'donor', '2018-10-15T10:37:33.735972Z');
INSERT INTO donor
  (id, first_name, last_name, photo, username, password, tel, stripe, type, creation_date) 
  VALUES 
  (4, 'Willie', 'Barrett', 'https://s3.eu-west-2.amazonaws.com/recipient-photo/woman4.jpg', 'willie@barrett.com', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', '34567987', '{
  "stripe": "Some stripe stuff•¶§∞¢"
  }', 'donor', '2018-10-07T10:37:33.735972Z');
INSERT INTO donor
  (id, first_name, last_name, photo, username, password, tel, stripe, type, creation_date) 
  VALUES 
  (5, 'Kelly', 'Gardner', 'https://s3.eu-west-2.amazonaws.com/recipient-photo/woman5.jpg', 'kelly@gardner.com', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', '9876545678', '{
  "stripe": "Some stripe stuffª•¶§∞¢"
  }', 'donor', '2018-10-16T10:37:33.735972Z');
INSERT INTO donor
  (id, first_name, last_name, photo, username, password, tel, stripe, type, creation_date) 
  VALUES 
  (6, 'Terrance', 'Hunter', 'https://s3.eu-west-2.amazonaws.com/recipient-photo/woman6.jpg', 'terrance@hunter.com', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', '0987653', '{
  "stripe": "Some stripe stuff€#¢∞§¶"
  }', 'donor', '2018-10-26T10:37:33.735972Z');
INSERT INTO donor
  (id, first_name, last_name, photo, username, password, tel, stripe, type, creation_date) 
  VALUES 
  (7, 'Brad', 'Morgan', 'https://s3.eu-west-2.amazonaws.com/recipient-photo/man5.jpg', 'brad@morgan.com', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', '12345687', '{
  "stripe": "Some stripe stuff¡€#¢"
  }', 'donor', '2018-11-05T10:37:33.735972Z');
INSERT INTO donor
  (id, first_name, last_name, photo, username, password, tel, stripe, type, creation_date) 
  VALUES 
  (8, 'Adrian', 'Cole', 'https://s3.eu-west-2.amazonaws.com/recipient-photo/man6.jpg', 'adrian@cole.com', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', '564738', '{
  "stripe": "Some stripe €#¢∞§¶ stuff"
  }', 'donor', '2018-11-07T10:37:33.735972Z');
INSERT INTO donor
  (id, first_name, last_name, photo, username, password, tel, stripe, type, creation_date) 
  VALUES 
  (9, 'Donald', 'Jones', 'https://s3.eu-west-2.amazonaws.com/recipient-photo/man7.jpg', 'donald@dean.com', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', '786905', '{
  "stripe": "Some stripe @£$%^&* stuff"
  }', 'donor', '2018-10-21T10:37:33.735972Z');
INSERT INTO donor
  (id, first_name, last_name, photo, username, password, tel, stripe, type, creation_date) 
  VALUES 
  (10, 'Salvador', 'Cunningham', 'https://s3.eu-west-2.amazonaws.com/recipient-photo/man8.jpg', 'salvador@cunningham.com', '$2b$10$500GIG4.3n33UAM75N2hieln0OFO0zu7GjzkRdqCjUBxbahVATwBS', '4352670', '{
  "stripe": "Some stripe(*&^%$) stuff"
  }', 'donor', '2018-10-21T10:37:33.735972Z');
ALTER SEQUENCE donor_id_seq RESTART WITH 11 INCREMENT BY 1;

INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (1, 1, 1, 200, 'serfvboiuygtfdfghj3456', '2018-10-21T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (2, 1, 2, 1000, 'asdfghjk2345678', '2018-10-22T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (3, 2, 3, 500, '2345678g', '2018-10-12T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (4, 2, 4, 300, '98765rertyhj', '2018-11-15T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (5, 3, 5, 200, 'oiuytfghjkmn', '2018-11-02T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (6, 3, 6, 800, 'aiuytrerfg5t8', '2018-11-12T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (7, 4, 7, 900, 'aiuytrerfg5t8', '2018-11-06T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (8, 4, 8, 1000, 'aiuytrerfg5t8', '2018-10-13T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (9, 5, 9, 700, 'aiuytrerfg5t8', '2018-10-13T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (10, 5, 10, 200, 'aiuytrerfg5t8', '2018-11-09T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (11, 1, 1, 300, 'aiuytrerfg5t8', '2018-11-15T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (12, 2, 2, 400, 'aiuytrerfg5t8', '2018-11-02T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (13, 3, 3, 900, 'aiuytrerfg5t8', '2018-10-31T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (14, 4, 1, 500, 'aiuytrerfg5t8', '2018-10-19T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (15, 5, 4, 600, 'aiuytrerfg5t8', '2018-10-27T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (16, 1, 1, 200, 'aiuytrerfg5t8', '2018-11-02T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (17, 2, 5, 300, 'aiuytrerfg5t8', '2018-11-11T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (18, 3, 1, 400, 'aiuytrerfg5t8', '2018-10-25T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (19, 4, 6, 700, 'aiuytrerfg5t8', '2018-11-09T10:37:33.735972Z');
INSERT INTO donation
  (id, recipient_id, donor_id, amount, stripe_id, time_stamp)
  VALUES
  (20, 5, 1, 200, 'aiuytrerfg5t8', '2018-11-04T10:37:33.735972Z');
ALTER SEQUENCE donation_id_seq RESTART WITH 21 INCREMENT BY 1;

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
  (3, 3, 'I make key charms', 'I am saving for a rent deposit', 'I like blueberry muffins');
INSERT INTO biography
  (id, recipient_id, bio_1, bio_2, bio_3)
  VALUES
  (4, 4, 'I was an extra in "Shawn of the Dead"', 'I like chatting to people', 'I walked to London from Cotsworld');
INSERT INTO biography
  (id, recipient_id, bio_1, bio_2, bio_3)
  VALUES
  (5, 5, 'I wrestled an alligator', 'I wrote a poem', 'I have a dog called Samson');
ALTER SEQUENCE biography_id_seq RESTART WITH 6 INCREMENT BY 1;

