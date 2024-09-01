import React, { useState } from 'react';
import { Modal, Button, TextField, Box } from '@mui/material';

const AddStudentModal = ({ open, handleClose, handleAdd }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [attendance, setAttendance] = useState('');

  const handleSubmit = async () => {
    if (!name || !age || !grade || !attendance) {
      alert('Please fill all fields');
      return;
    }
    const newStudent = { name, age, grade, attendance };
    try {
      await handleAdd(newStudent);
      setName('');
      setAge('');
      setGrade('');
      setAttendance('');
      handleClose(); // Close the modal on successful submission
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...modalStyle }}>
        <h2>Add New Student</h2>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Attendance"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginRight: '10px' }}>
          Add Student
        </Button>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default AddStudentModal;
