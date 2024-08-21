import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './Dashboard.css';

const Dashboard = () => {
  
  const studentData = [
    { id: 1, name: 'Alice Johnson', grade: 'A' },
    { id: 2, name: 'Bob Smith', grade: 'B' },
    { id: 3, name: 'Charlie Brown', grade: 'A' },
  ];

  const attendanceData = [
    { date: '2024-08-01', present: 25, absent: 5 },
    { date: '2024-08-02', present: 24, absent: 6 },
    { date: '2024-08-03', present: 26, absent: 4 },
  ];

  const gradesData = [
    { subject: 'Math', average: 'A-' },
    { subject: 'Science', average: 'B+' },
    { subject: 'English', average: 'A' },
  ];

  return (
    <div className="dashboard">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <div className="dashboard-section">
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Student Overview
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Grade</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentData.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.id}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.grade}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>

      <div className="dashboard-section">
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Attendance Records
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Present</TableCell>
                    <TableCell>Absent</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attendanceData.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.present}</TableCell>
                      <TableCell>{record.absent}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>

      <div className="dashboard-section">
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recent Grades
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Subject</TableCell>
                    <TableCell>Average Grade</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gradesData.map((grade, index) => (
                    <TableRow key={index}>
                      <TableCell>{grade.subject}</TableCell>
                      <TableCell>{grade.average}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
