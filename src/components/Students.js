import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Typography } from '@mui/material';
import './Students.css';

const studentsData = [
  { id: 1, name: 'John Doe', age: 20, grade: 'A', attendance: '95%', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: 2, name: 'Jane Smith', age: 21, grade: 'B+', attendance: '89%', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: 3, name: 'Alice Johnson', age: 22, grade: 'A-', attendance: '92%', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { id: 4, name: 'Robert Brown', age: 23, grade: 'B', attendance: '87%', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: 5, name: 'Emily Davis', age: 20, grade: 'A+', attendance: '98%', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
];

const Students = () => {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table>
        <TableHead className="table-head">
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Attendance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsData.map((student) => (
            <TableRow key={student.id}>
              <TableCell>
                <Avatar alt={student.name} src={student.avatar} />
              </TableCell>
              <TableCell>
                <Typography variant="body1" className="student-name">{student.name}</Typography>
              </TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.grade}</TableCell>
              <TableCell>{student.attendance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Students;
