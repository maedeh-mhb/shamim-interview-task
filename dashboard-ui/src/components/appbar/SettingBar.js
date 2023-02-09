import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import logo from '../../assets/icons/logo.svg';
import logout from '../../assets/icons/logout.svg';
import notif from '../../assets/icons/notif.svg';
import setting from '../../assets/icons/setting.svg';
import { convertNumberToLetter } from '../../utils/ArabicConvert';



 const useStyles= makeStyles()(theme=>({
   appBar:{
     backgroundColor:'white',
     boxShadow: '0px 10px 15px -11px rgba(0,0,0,0.1)',
     padding:'15px'
    },
    toolBar: {
      display: 'flex',
      justifyContent:' space-between',
      flexFlow: 'row-reverse'
    },
   icon: {
    width:'30px',
    border:'2px solid ',
    borderColor: theme.typography.light_grey100,
    borderRadius:'50%'
   },
   badge:{
    '& .MuiBadge-badge' : {
     backgroundColor:theme.typography.highlighted,  
    }

   },
   button : {
    padding:'10px',
    margin:'0'
   },

 }))

function SettingBar(props) {
   const {classes} = useStyles();
   const [badge,setBadge] = useState(4);
   const navigate=useNavigate()

   useEffect(()=>{
   let newBadge= convertNumberToLetter(badge);
    setBadge(newBadge)
   },[])

  return (
    <AppBar  className={classes.appBar} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar  className={classes.toolBar}>
        <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="پیام ها" >
          <IconButton size="large"
          className={classes.button}
           color="inherit"
           aria-label="notification icon"
           sx={{ mr: 2 }}>
              <Badge badgeContent={badge} className={classes.badge} color='error'>
                 <img src={notif} className={classes.icon}/>
              </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="تنطیمات">
          <IconButton
          className={classes.button}
           size="large"
           color="inherit"
           aria-label="setting icon"
           sx={{ mr: 2 }}>
            <img src={setting} className={classes.icon}/>
          </IconButton>
        </Tooltip>
        <Tooltip title="خروج">
          <IconButton 
          className={classes.button}
           size="large"
           color="inherit"
           aria-label="logout icon"
           sx={{ mr: 2 }}>
            <img src={logout} className={classes.icon}/>
          </IconButton>
        </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="خانه">
              <IconButton onClick={()=>navigate('/')}>
                <Avatar alt="logo" src={logo} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
    </AppBar>
  );
}



export default SettingBar;