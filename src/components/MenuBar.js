import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom'
import {useIdentityContext} from 'react-netlify-identity-gotrue'
// import Modal from '@mui/material/Modal';
// import LoginForm from '../components/login/LoginForm'
// import SignupForm from '..components/login/SignupForm'
 
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
const identity = useIdentityContext()

//  const [modalOpen, setmodalOpen] = React.useState(false);
//   const handleModalOpen = () => setmodalOpen(true);
//   const handleModalClose = () => setmodalOpen(false);

 

  // const handleModalClose = () => {
  //   handleOpen();
    
  // };





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


          {!identity.user && !identity.provisionalUser && (
              // <Tooltip title="Signup">
                <IconButton
                  color="inherit"
                  size='small'
                  onClick={() => handleNavSelection('signup', false)}
                >
                  {/* <AccountCircleIcon /> */}
                  Signup
                </IconButton>
              // </Tooltip>
            )}

            {!identity.user && (
              // <Tooltip title="Login">
                <IconButton
                  color="inherit"
                  size='small'
                  onClick={() => handleNavSelection('login', false)}
                >
                  {/* <LoginIcon /> */}
                  Login
                </IconButton>
              // </Tooltip>
            )}

            {identity.user && (
              // <Tooltip title="Logout">
              <IconButton size='small' color="inherit" onClick={identity.logout}>
                Logout
                {/* <Avatar sx={{ width: 24, height: 24 }}>{identity.user?.user_metadata?.full_name.slice(0, 1)}</Avatar> */}
              </IconButton>
              // </Tooltip>
            )}



          {/* <Button color="inherit"onClick={() => handleNavSelection('signup', true)} >Sign Up</Button>
          <Button color="inherit" onClick={() => handleNavSelection('login', true)}>Login</Button> */}

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
        {/* <Modal open={modalOpen}>
<LoginForm closeHandler={handleModalClose}/>

    </Modal> */}

    {/* <Modal open={modalOpen}>
<SignupForm closeHandler={handleModalClose}/>

    </Modal> */}
    </>
  );
}

