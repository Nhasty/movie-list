CREATE DATABASE movieList;
USE movieList;

CREATE TABLE movies (
  id INTEGER AUTO_INCREMENT,
  title varChar(255) NOT NULL,
  watched BOOLEAN NOT NULL DEFAULT false,
  UNIQUE KEY (title),
  PRIMARY KEY (id)
);