import Box from '@mui/material/Box';
import { makeStyles } from 'tss-react/mui';
import display from '../../assets/icons/display.svg'

const useStyles= makeStyles()(theme=>({
    box:{
         marginTop:'0.5rem',
         fontFamily: theme.typography.fontFamily,
         color:theme.typography.light_grey200,
         fontSize:theme.typography.font_size200,
         display:'flex',
         justifyContent:'space-between',
         width:'90%'
    },
    iconContainer :{
        display:'flex'
    },
    icon: {
        width:theme.icons.iconSize_100,
        marginRight:"0.3rem"
    }
 
  }));

  
function Header(props) {
    const {classes} = useStyles();
    return (
        <Box className={classes.box}>
            <div>آثار من:</div>
            <div className={classes.iconContainer}>
                <span>نوع نمایش:</span>
                <img src={display} className={classes.icon}/>
            </div>
        </Box>
    );
}

export default Header;