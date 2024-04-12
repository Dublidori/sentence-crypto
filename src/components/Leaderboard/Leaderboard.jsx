// components/Leaderboard.jsx
import React from 'react';
import { Grid, Typography, List, ListItem, Paper } from '@mui/material';

const Leaderboard = ({ entries }) => {
    return (
        <Paper sx={{ p: 2, backgroundColor: '#222', mt: 2, borderColor: 'primary.main', borderWidth: 3, borderStyle: 'solid', overflow: 'hidden' }}>
            <Typography variant="h4" component="h2" align="center" color="primary" gutterBottom>
                Top Sentences
            </Typography>
            <List>
                <Grid container>
                    {entries.map((entry, index) => (
                        <ListItem key={index} sx={{ borderBottom: '1px dashed #0f0', py: 1, color: '#0f0', pt: 3 }}>
                            <Grid item sm={3}  sx={{ justifyContent: 'flex-start', display: 'flex' }}>
                                <Typography variant="h7" component="h2" align="center" color="primary" gutterBottom>
                                    {entry.quote}
                                </Typography>
                            </Grid>
                            <Grid item sm={3} sx={{ justifyContent: 'flex-end', display: 'flex' }}>
                                <Typography variant="h7" component="h2" align="center" color="primary" gutterBottom>
                                    {entry.amount} ETH
                                </Typography>
                            </Grid>
                            <Grid item sm={6} sx={{ justifyContent: 'flex-end', display: 'flex' }}>
                                <Typography variant="h7" component="h2" align="center" color="primary" gutterBottom>
                                    {entry.bidder}
                                </Typography>
                            </Grid>

                        </ListItem>
                    ))}
                </Grid>
            </List>
        </Paper>
    );
};

export default Leaderboard;
