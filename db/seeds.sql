-- Seeds for students table
INSERT INTO `attendance_tracker_db`.`students` (`student_id`, `student_name`,`student_gender`, `student_region`, `student_trainer`) 
VALUES (default, 'Pikachu','M', 'Kanto', 'Ash Ketchum'),
	(default, 'Charmander','M', 'Kanto', 'Ash Ketchum'),
    (default, 'Bulbasaur','F', 'Johto', 'Misty Kasumi'),
    (default, 'Squirtle','M', 'Johto', 'Misty Kasumi')
;
SELECT * FROM students;

-- Seeds for class roster table
INSERT INTO `attendance_tracker_db`.`roster` (`class_id`, `trainer_name`,`trainer_type`, `total_absences`) 
VALUES  (default, 'Ash Ketchum','Normal', 0),
	    (default, 'Misty Kasumi','Water', 0)
;
SELECT * FROM roster; 