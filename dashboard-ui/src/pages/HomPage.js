import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import Information from '../components/information/Information';
import Works from '../components/works/Works';

function HomPage(props) {
    const drawerWidth = 250;
  
    return (

            <Box
              component="main"
              // overflow={'hidden'}
              sx={{  width:`calc(100% - ${drawerWidth}px)`,
              marginRight:`${drawerWidth}px` ,
              marginTop:`100px`,
             }}
             >
            <Grid container spacing={2} justifyContent="space-around">
                <Grid item xs={6} md={3} >
                  <Information/>
                </Grid>
                <Grid item xs={6} md={9}>
                  <Works/>
                </Grid>
            </Grid>
            </Box>

    );
}

export default HomPage;