import { styled } from '@mui/material/styles';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SettingBar from '../appbar/SettingBar';
import NavigationBar from './NavigationBar';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      }),
    }),
  );
  

function MainLayout(props) {
    const [open, setOpen] = React.useState(true);
    return (
        <div>
            <SettingBar/>
            <NavigationBar open={open}/>
             <Main open={open}>  
                <Outlet/>
            </Main>

        </div>
    );
}

export default MainLayout;