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
        width:theme.icons.iconSize_100,
        cursor:'pointer !important',
        zIndex:'12',
        marginLeft:'0'
    },
    container: {
        width:'100%',
        display:'grid',
        alignItems:'center',
        gridTemplateColumns: '2fr 3fr 1fr',
      },

      devider: {
        flexBasis: '50%',
        height:'0.5px',
        backgroundColor:theme.typography.light_grey200
      },
      innerContainer: {
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end'
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
                <span className={classes.devider}></span>
                <img src={edit} className={classes.img}/>
  
            </div>
        </Box>
    );
}

export default CardsHeader;