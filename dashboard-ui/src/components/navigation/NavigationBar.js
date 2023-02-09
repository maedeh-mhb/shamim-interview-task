import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import adduser from '../../assets/icons/adduser.svg';
import chats from '../../assets/icons/chats.svg';
import dashboard from '../../assets/icons/dashboard.svg';
import invitation from '../../assets/icons/invitation.svg';
import invoice from '../../assets/icons/invoice.svg';
import profile from '../../assets/icons/profile.svg';
import gallery from '../../assets/icons/gallery.svg';

const useStyles= makeStyles()(theme=>({

    box:{
        
        ...theme.mixins.toolbar,
        marginTop: "6.5rem",
     },
    listItem:{
        ...theme.overrides.MuiListItem ,
    },

  }))

  
function NavigationBar(props) {
    const {classes} = useStyles();
    const {pathname} = useLocation();
    const navigate= useNavigate();
    const [value,setValue] = useState(0)
    const [iseOpen, setOpen] = useState({
        right: true,
      });
    
      useEffect(()=>{
        if(value !== 1 && pathname =='/profile') {
            setValue(1)
        }
        if(value !== 2 && pathname =='/chats') {
            setValue(2)
        }
        if(value !== 3 && pathname =='/invitation') {
            setValue(3)
        }
        if(value !== 4 && pathname =='/invoice') {
            setValue(4)
        }
        if(value !== 6 && pathname =='/membership') {
            setValue(5)
        }
        if(value !== 6 && pathname =='/gallery') {
            setValue(5)
        }

      },[pathname]);

      const toggleDrawer = (anchor, open) => (event) => {
        setOpen({ ...iseOpen, [anchor]: open });
      };

      const listItems= [
        {
            text:'داشبورد',
            param:'/',
            img: dashboard
        },
        {
            text:'پروفایل',
            param:'/profile',
            img: profile
        },
        {
            text:'گفتگو ها ',
            param:'/chats',
            img: chats
        },
        {
            text:'ارسال دعوت نامه',
            param:'/invitation',
            img: invitation
        },
        {
            text:'صدور پیش فاکتور',
            param:'/invoice',
            img: invoice
        },
        {
            text:'عضویت در کانتمو',
            param:'/membership',
            img: adduser
        },
        {
            text:'نمایش آثار',
            param:'/gallery',
            img: gallery
        },
      ]
      function handleChange(e,newValue){
        setValue(newValue);
      }
      function LinkTab(props) {
        return (
          <Tab
            
            component="a"
            onClick={(event) => {
              event.preventDefault();
            }}
            {...props}
          />
        );
      }
      
      const list = (anchor) => (
        <Box
          className={classes.box}
          sx={{ width: 250 }}
          role="presentation"
        >
          <Tabs value={value} orientation="vertical"
            TabIndicatorProps={{
                style: { display: 'none' }
              }}
             onChange={handleChange}>
            {listItems.map((item, index) => (
              <LinkTab 
              label={item.text} 
              onClick={()=>navigate(item.param)}
              icon={<img src={item.img}/>} 
              iconPosition="start" 
              className={classes.listItem}/>
            ))}
          </Tabs>
        </Box>
      );
    
    return (
        <div>

          <Drawer
           variant="persistent"
            elevation={0}
            anchor={'right'}
            open={iseOpen['right']}
            hideBackdrop={true}
          >
            {list('right')}
          </Drawer>

    </div>
    );
}

export default NavigationBar;