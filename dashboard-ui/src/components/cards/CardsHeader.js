import Box from '@mui/material/Box';
import { makeStyles } from 'tss-react/mui';
import edit from '../../assets/icons/edit.svg';



const useStyles= makeStyles()(theme=>({
    box:{
        fontFamily: theme.typography.fontFamily,
        fontSize:theme.typography.font_size100,
        color:theme.typography.light_grey200,
        marginRight:'5%',
    },
    img:{
        width:'1.5rem',
        cursor:'pointer !important',
        zIndex:'12'
    },
    container: {
        width:'100%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
       
      },

      devider: {
        width:'70%',
        marginRight:'3%',
        height:'0.10em',
        backgroundColor:theme.typography.light_grey200
      },
      innerContainer: {
        width:'60%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
      }
  }))

function CardsHeader(props) {
    const {title,type}=props;
    const {classes} = useStyles();
  
    
    return (
        <Box className={classes.box}>
            <div className={classes.container}>
                <p className={classes.title}>
                  {title}
                </p>
                <div className={classes.innerContainer}>
                <span className={classes.devider}></span>
                <img src={edit} className={classes.img}/>
                </div>
                
            </div>
        </Box>
    );
}

export default CardsHeader;