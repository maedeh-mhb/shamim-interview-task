import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import Information from '../components/information/Information';

function HomPage(props) {
    const drawerWidth = 250;
  
    return (

            <Box
              component="main"
              overflow={'hidden'}
              sx={{  width:`calc(100% - ${drawerWidth}px)`,marginRight:`${drawerWidth}px` ,marginTop:`100px` }}
             >
            <Grid container spacing={2}>
                <Grid item xs={8} >
                  <Information/>
                </Grid>
                <Grid item xs={8} md={6}>
                </Grid>
            </Grid>
            </Box>

    );
}

export default HomPage;