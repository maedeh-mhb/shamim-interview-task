import { IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import profile from '../../assets/images/profile.jpg';
import theme from '../../theme/theme';
import facebook from '../../assets/icons/facebook.svg';
import chrome from '../../assets/icons/chrome.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';

const useStyles= makeStyles()(theme=>({
  media :{
    width:'120px',
    height:'120px',
    borderRadius:'50%',
    border:`1px solid ${theme.typography.highlighted}`
  },
  content: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:'0'
  },
  action:{
    display:'flex',
    justifyContent:'space-evenly',
    marginTop:'0'
  },
  icon:{
    width:theme.icons.iconSize_100
  }

}));


function ProfileCard(props) {
  const {classes} = useStyles();
    return (
        <Card sx={{ maxWidth: 345 }} elevation={0}>
         <CardContent className={classes.content}>
             <CardMedia className={classes.media}
             image={profile}
             alt="profile picture"
          />
          <h1 style={{...theme.h1}}>
              مهدی ساغری
          </h1>
         </CardContent>
           <CardActions className={classes.action}>
            <IconButton>
              <img src={whatsapp} className={classes.icon}/>
            </IconButton>
            <IconButton>
              <img src={chrome} className={classes.icon}/>
            </IconButton>
            <IconButton>
              <img src={facebook} className={classes.icon}/>
            </IconButton>
           </CardActions>
      </Card>
    );
}

export default ProfileCard;