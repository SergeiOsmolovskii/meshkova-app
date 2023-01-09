import React from 'react';
import './../styles/footer.css';
import { Box, List, ListItem, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box component="footer" className='footer-main' height={80} sx={{backgroundColor: 'primary.main'}}>
      <List sx={{ display: 'flex', height: '100%' }}>
      <ListItem alignItems="center" sx={{ justifyContent: 'center' }}>
          <Typography paragraph color="text.primary" align="center" m={0}> @2023 </Typography>
        </ListItem>
      </List>
    </Box>
  )
}