CREATE DATABASE moroes;

CREATE TABLE meals(
  meal_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  price DECIMAL
);


INSERT INTO meals (title,description,price) VALUES ('Iced Americano','Espresso with more water','10.25');