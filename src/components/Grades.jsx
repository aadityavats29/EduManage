import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Chip, Button } from '@mui/material';
import Papa from 'papaparse';
import './Grades.css';

const gradesData = [
  { id: 1, name: 'John Doe', subject: 'Mathematics', grade: 'A' },
  { id: 2, name: 'Jane Smith', subject: 'Science', grade: 'B+' },
  { id: 3, name: 'Alice Johnson', subject: 'English', grade: 'A-' },
  { id: 4, name: 'Robert Brown', subject: 'History', grade: 'B' },
  { id: 5, name: 'Emily Davis', subject: 'Art', grade: 'A+' },
];

const exportToCSV = (data, filename) => {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const getGradeColor = (grade) => {
  switch (true) {
    case /A\+/.test(grade):
      return 'success';
    case /A/.test(grade):
      return 'primary';
    case /B\+/.test(grade):
      return 'info';
    case /B/.test(grade):
      return 'warning';
    case /C/.test(grade):
      return 'error';
    default:
      return 'default';
  }
};

const Grades = () => {
  return (
    <div className="grades-container">
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead className="table-head">
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Grade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gradesData.map((record) => (
              <TableRow key={record.id}>
                <TableCell>
                  <Typography variant="body1" className="student-name">{record.name}</Typography>
                </TableCell>
                <TableCell>{record.subject}</TableCell>
                <TableCell>
                  <Chip label={record.grade} color={getGradeColor(record.grade)} className="grade-chip" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="export-button-container">
        <Button onClick={() => exportToCSV(gradesData, 'grades.csv')} variant="contained" color="primary">
          Export Grades
        </Button>
      </div>
    </div>
  );
};

export default Grades;
