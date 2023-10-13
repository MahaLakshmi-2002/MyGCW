import React, { useState, useEffect, useRef } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import './Header.css';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';

const Header = () => {
  // Define your header_styles object with your desired styles
  const header_styles = {
    container_styles: {
      background: '#00e700',
    
      // Add your container styles here
    },
    login_btn: {
        background: 'white',
        textTransform: 'none',
        color: 'black',
        borderRadius: '10px',
        fontSize: '0.90rem',
        height: '25px',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        "&:hover": {
            backgroundColor: "yellow"
        }
    },
    savetohomepage_btn: {
      background: 'white',
      textTransform: 'none',
      color: 'black',
      borderRadius: '10px',
      fontSize: '0.90rem',
      height: '25px',
      fontFamily: 'Poppins',
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      "&:hover": {
          backgroundColor:"yellow"
      }
  },
    nav_link_font: {
      color: 'black',
      fontFamily: 'Poppins',
      cursor: 'pointer',
      // Add your navigation link styles here
    },
    // Add other styles as needed
    img_box: { 
        width: '100px', 
        height: '100%', 
        marginLeft: '1rem' 
    }
  };

  // State to manage whether to show the "Add to Home Screen" button
  const [showAddToHomeScreenButton, setShowAddToHomeScreenButton] = useState(true);

  // A reference to store the beforeinstallprompt event
  const deferredPrompt = useRef(null);

  // useEffect to register the beforeinstallprompt event
  useEffect(() => {
    // Check if the browser supports the beforeinstallprompt event
    if ('BeforeInstallPromptEvent' in window) {
      // Add an event listener to register the beforeinstallprompt event
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the default browser prompt
        e.preventDefault();

        // Store the event for later use
        deferredPrompt.current = e;

        // Show your custom "Add to Home Screen" button
        setShowAddToHomeScreenButton(true);
      });
    }
  }, []);

  // Function to handle the "Add to Home Screen" button click
  const handleAddToHomeScreen = () => {
    // Check if the deferredPrompt is available
    if (deferredPrompt.current) {
      // Trigger the installation prompt
      deferredPrompt.current.prompt();

      // Wait for the user choice
      deferredPrompt.current.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }

        // Cleanup
        deferredPrompt.current = null;

        // Hide the button after the prompt
        setShowAddToHomeScreenButton(false);
      });
    }
  };

  return (
    <div className="head">
      <Grid container xs={12} sx={header_styles.container_styles} direction='row'>
        <Grid item xs={6}>
          <Box sx={header_styles.img_box}>
            <img style={{ height: '100%', width: '100%' }} src={process.env.PUBLIC_URL + '/GCWLogo.jpg'} alt='green' />
          </Box>
        </Grid>
        <Grid item xs={6} display='flex' alignItems='center'>
          <Grid container xs={12}>
            <Grid item xs={8}>
              <Grid container direction='row' xs={12} justifyContent='flex-end' alignItems='center'>
                <Grid item>
                  <Typography className='links' onClick={() => window.open("/")} sx={{ ...header_styles.nav_link_font, padding: '0 10px', fontSize: '18px', opacity: 1, textDecoration: 'underline' }}><b>Home</b></Typography>
                </Grid>
                <Grid item>
                  <Typography className='links' onClick={() => window.open("/blog")} sx={{ ...header_styles.nav_link_font, padding: '0 10px', fontSize: '18px', opacity: 1, textDecoration: 'underline' }}><b>Blog</b></Typography>
                </Grid>
                <Grid item>
                  <Typography className='links' onClick={() => window.open("/about")} sx={{ ...header_styles.nav_link_font, padding: '0 10px', fontSize: '18px', opacity: 1, textDecoration: 'underline' }}><b>About Us</b></Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} display='flex' justifyContent='space-evenly' alignItems='center'>

              <Button onClick={() => window.open("/login")} sx={header_styles.login_btn}><b>Login</b></Button>
              {showAddToHomeScreenButton && (
                <Button id="add-to-home-screen-button" onClick={handleAddToHomeScreen} sx={header_styles.savetohomepage_btn}><b><abbr title="Save to Home Screen">Save to <AddHomeOutlinedIcon  fontSize="small" /> </abbr></b></Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header
