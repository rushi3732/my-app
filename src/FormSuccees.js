import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Home from './Home'
import Enquiries from './Enquiries';
import  AddEnquiry from './AddEnquiry';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const FormSuccess = () => {
  const [setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

 
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
          <Router>
    <div>
    <AppBar position="static">
  
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src='/logo.svg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'topz',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
   <div >
 <nav className="navbar navbar-expand-lg navbar-light">

<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
        <Link  style={{paddingLeft: 13, textDecoration: 'none', color: '#FFF' }} to="/" className="nav-item nav-link " >Home</Link>

        <Link  style={{paddingLeft: 13, textDecoration: 'none', color: '#FFF' }} to="/enquiries" className="nav-item nav-link " ><span>Enquiries</span></Link>
        <Link  style={{paddingLeft: 13, textDecoration: 'none', color: '#FFF' }} to="/AddEnquiry" className="nav-item nav-link " ><span>AddEnquiry</span></Link>
    </div>
</div>
</nav>
</div>
</Toolbar>
  </Container>
</AppBar>
    </div>
    <div>
  <Routes>
    <Route  exact path="/" element={<Home />} /> 
    <Route  exact  path='/addEnquiry' element={<AddEnquiry/>}/>
    <Route  exact  path='/enquiries' element={<Enquiries/>}/>
  </Routes>

    </div>
    </Router>
    </div>

  );
};
export default FormSuccess