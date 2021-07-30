import React from 'react';
import { AppBar,  Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box} from '@material-ui/core';
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail} from '@material-ui/icons';

//IconButton Wrapper changes an Icon into an button.
//Inline-Style 

function Navbar  () {
  return (
    <Box component='nav'>
      <AppBar position='static' style={{background: "#222"}}>
        <Toolbar>
          <IconButton>
            <ArrowBack style={{background="tomato"}}>

            </ArrowBack>
          </IconButton>
        </Toolbar>
      </AppBar>
      
    </Box>
  )
}

export default Navbar;