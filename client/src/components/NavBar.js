import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{backgroundColor: 'goldenrod'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          <Button href= '/' color="inherit">About Me</Button>
          <Button href= '/portfolio' color="inherit">Portfolio</Button>
          <Button href= '/resume' color="inherit">Resume</Button>
          <Button href= '/contact' color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
  
}

export default NavBar