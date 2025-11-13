import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'
import { Tooltip } from '@mui/material';

function Header() {
    const projectInfo="The Resume Builder App is a user-friendly platform that allows users to easily create, edit, and customize professional resumes through an intuitive interface. It features editable sections for personal details, education, experience, skills, and projects, along with smart tooltips that guide users in entering the right information. A real-time live preview ensures that every change reflects instantly, while the option to download the finished resume as a PDF adds convenience. The app also offers responsive design for both desktop and mobile users, dynamic skill tags for better organization, and optional features like multiple resume templates, data saving via local storage or Firebase, and user login for storing multiple resumes securely."
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img width={'30px'} src="https://tse1.mm.bing.net/th/id/OIP.Q7Y3_hBRXhZXdCnxOtpQ1AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="no image" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/resume'}  className='text-light text-decoration-none' >rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}>
            <Button color="inherit">About Us</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
