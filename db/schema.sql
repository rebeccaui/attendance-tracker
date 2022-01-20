DROP DATABASE IF EXISTS attendance_tracker_db;
CREATE DATABASE attendance_tracker_db;

USE attendance_tracker_db;

CREATE TABLE students (
    student_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    student_name VARCHAR(50) NOT NULL,
    student_gender ENUM('M', 'F', 'O'),
    PRIMARY KEY(student_id)
);

CREATE TABLE roster (
    class_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    trainer_name VARCHAR(50) UNIQUE,
    trainer_type VARCHAR(20),
    total_absences TINYINT UNSIGNED,
    PRIMARY KEY(class_id)
);

-- Do not allow student_id to be changed, but allow deletion
-- Do not allow class_id to be changed or deleted
CREATE TABLE attendance (
	student_id INT UNSIGNED NOT NULL,
    class_id INT UNSIGNED NOT NULL,
    present ENUM('P', 'A', 'UA') DEFAULT 'P',
    attendance_taken DATE,
    submitted_at TIMESTAMP,
    CONSTRAINT `fk_student_id`
    FOREIGN KEY(student_id)
REFERENCES students(student_id) ON UPDATE NO ACTION ON DELETE CASCADE,
	CONSTRAINT `fk_class_id`
    FOREIGN KEY(class_id)
REFERENCES roster(class_id) ON UPDATE NO ACTION ON DELETE NO ACTION
);


-------------------
-- QUERIES
-------------------

-- Display trainer_name list in roster dropdown selection
SELECT * FROM roster.trainer_name;

-- View a class roster once a trainer_name is selected
SELECT * FROM students WHERE student_trainer = user.target
    ORDER BY student_name ASC;

-- Once attendance form is submitted, evaluate sum of total absences for the class
SELECT COUNT FROM attendance.present WHERE present = 'A'
UNION
SELECT * FROM roster.total_absences ORDER BY DATE DESC;
