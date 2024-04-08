// components/Leaderboard.jsx
import React from 'react';
import { Box, Typography, List, ListItem, Paper } from '@mui/material';

const Leaderboard = ({ entries }) => {
  return (
    <Paper sx={{ p: 2, backgroundColor: '#222', mt: 2, borderColor: 'primary.main', borderWidth: 3, borderStyle: 'solid' }}>
      <Typography variant="h4" component="h2" align="center" color="primary" gutterBottom>
        Top Sentences
      </Typography>
      <List>
        {entries.map((entry, index) => (
          <ListItem key={index} sx={{ borderBottom: '1px dashed #0f0', py: 1, color: '#0f0' }}>
            "{entry.text}" - {entry.amount} ETH
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Leaderboard;
