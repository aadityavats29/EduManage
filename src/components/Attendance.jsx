import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Chip, Button } from '@mui/material';
import Papa from 'papaparse';
import './Attendance.css';

const attendanceData = [
  { id: 1, name: 'John Doe', date: '2024-08-01', status: 'Present' },
  { id: 2, name: 'Jane Smith', date: '2024-08-01', status: 'Absent' },
  { id: 3, name: 'Alice Johnson', date: '2024-08-01', status: 'Present' },
  { id: 4, name: 'Robert Brown', date: '2024-08-01', status: 'Late' },
  { id: 5, name: 'Emily Davis', date: '2024-08-01', status: 'Present' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Present':
      return 'success';
    case 'Absent':
      return 'error';
    case 'Late':
      return 'warning';
    default:
      return 'default';
  }
};

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

const Attendance = () => {
  return (
    <div className="attendance-container">
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead className="table-head">
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.map((record) => (
              <TableRow key={record.id}>
                <TableCell>
                  <Typography variant="body1" className="student-name">{record.name}</Typography>
                </TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>
                  <Chip label={record.status} color={getStatusColor(record.status)} className="status-chip" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="export-button-container">
        <Button onClick={() => exportToCSV(attendanceData, 'attendance.csv')} variant="contained" color="primary">
          Export Attendance
        </Button>
      </div>
    </div>
  );
};

export default Attendance;
