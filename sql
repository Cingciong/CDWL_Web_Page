CREATE TABLE `newsteller`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `email`          VARCHAR(320) NOT NULL ,
  `date`           datetime,

  PRIMARY KEY (`id`)
)

INSERT INTO newsteller (id, email, date) VALUES (null, 'email', 'date');