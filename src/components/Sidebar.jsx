import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, People, Class, BarChart, Person } from '@mui/icons-material';
import './Sidebar.css';


const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard />, path: '/' },
    { text: 'Students', icon: <People />, path: '/students' },
    { text: 'Attendance', icon: <Class />, path: '/attendance' },
    { text: 'Grades', icon: <BarChart />, path: '/grades' },
    { text: 'Profile', icon: <Person />, path: '/profile' },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      classes={{ paper: 'sidebar' }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} onClick={() => window.location.pathname = item.path} className="sidebar-item">
            <ListItemIcon className="sidebar-icon">{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
