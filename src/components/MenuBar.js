import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom'

 
    import Menu from '@mui/material/Menu';
    import MenuItem from '@mui/material/MenuItem';





export default function MenuBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const history = useHistory()
const handleNavSelection = (selection, shouldToggle) => {
  history.push(`/${selection}`)
}


  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Studio Ghibli Fans
          </Typography>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Login</Button>

        </Toolbar>

      </AppBar>

    </Box>
    
    
    
     
    
      
        <div>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => handleNavSelection('welcome', true)}>Home</MenuItem>
            <MenuItem onClick={() => handleNavSelection('films', true)}>Films</MenuItem>
            <MenuItem onClick={handleClose}>Characters</MenuItem>
          </Menu>
        </div>
      
    
    </>
  );
}

