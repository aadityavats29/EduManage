import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import './Profile.css';

const userData = {
  name: 'Anjuli Goel',
  avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
  email: 'anjuligoel@example.com',
  phone: '123-4567',
  address: 'Chitkara',
  bio: 'Mentor G-15'
};

const Profile = () => {
  return (
    <div className="profile-container">
      <Card className="profile-card">
        <CardHeader
          avatar={<Avatar alt={userData.name} src={userData.avatar} className="profile-avatar" />}
          title={<Typography variant="h5">{userData.name}</Typography>}
          subheader={<Typography variant="subtitle1" color="textSecondary">{userData.email}</Typography>}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>Contact Information</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Email" secondary={userData.email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Phone" secondary={userData.phone} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Address" secondary={userData.address} />
            </ListItem>
          </List>
          <Divider />
          <Typography variant="h6" gutterBottom>Biography</Typography>
          <Typography variant="body1">{userData.bio}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
