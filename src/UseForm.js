import { useState, useEffect } from 'react';

import axios from 'axios'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
   
  });
  const [errors, setErrors] = useState({});
  const [number] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const[userList,setUserList]=useState([])

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
      
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );




console.log(values);

  return { handleChange, handleSubmit, values, errors };
}

export default useForm;
{/*   <AppBar position="static" bg="dark" variant="dark">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
      
          <div >

<Router>

    <nav className="navbar navbar-expand-lg navbar-light bg-light  fix">

        <div className="collapse navbar-collapse me-auto" id="navbarNavAltMarkup" >
            <div className="navbar-nav me-auto" >
                <Link  to="/home" className="nav-item nav-link " ><span>Home</span></Link>
                <Link  to="/enquiries" className="nav-item nav-link " ><span>Enquiries</span></Link>
                <Link to="/addEnquiry" className="nav-item nav-link" >Add Enquiry</Link>
              

            </div>
        </div>
    </nav>
    

        <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/enquiries' element={<Enquiries/>}/>
              <Route path='/addEnquiry' element={<AddEnquiry/>}/>
          </Routes>  
      
    
</Router>

</div>
         

        

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/logo.svg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
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
        </Toolbar>
      </Container>
    </AppBar>
      <Navbar> */}