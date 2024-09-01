import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { getStudents, addStudent, deleteStudent } from '../api';
import AddStudentModal from './AddStudentModal';
import './Students.css';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleAddStudent = async (newStudent) => {
    try {
      await addStudent(newStudent);
      const updatedStudents = await getStudents();
      setStudents(updatedStudents);
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await deleteStudent(id);
      const updatedStudents = await getStudents();
      setStudents(updatedStudents);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="students-page">
      <TableContainer component={Paper} className="table-container students-table-container">
        <Table>
          <TableHead className="table-head">
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student._id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteStudent(student._id)}
                    className="delete-button"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="add-student-button">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setModalOpen(true)}
        >
          Add Student
        </Button>
      </div>
      <AddStudentModal 
        open={modalOpen} 
        handleClose={() => setModalOpen(false)} 
        handleAdd={handleAddStudent} 
      />
    </div>
  );
};

export default Students;
