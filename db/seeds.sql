-- Seeds for students table
INSERT INTO `attendance_tracker_db`.`students` (`student_id`, `student_name`,`student_gender`, `student_region`) 
VALUES (default, 'Pikachu','M', 'Kanto'),
	(default, 'Charmander','M', 'Kanto'),
    (default, 'Bulbasaur','F', 'Johto'),
    (default, 'Squirtle','M', 'Johto')
;
SELECT * FROM students;

-- Seeds for class roster table
INSERT INTO `attendance_tracker_db`.`roster` (`class_id`, `trainer_name`,`trainer_type`, `total_absences`) 
VALUES  (default, 'Ash','Normal', 0),
	    (default, 'Red','Fire', 0),
        (default, 'Misty','Water', 0),
        (default, 'Brock','Rock', 0),
        (default, 'Gary','Grass', 0)
;
SELECT * FROM roster; 