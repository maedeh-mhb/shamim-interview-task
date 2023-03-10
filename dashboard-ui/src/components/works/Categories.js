import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from 'tss-react/mui';
import deleteIcon from '../../assets/icons/delete.svg';
import edit from '../../assets/icons/edit.svg';
import plus from '../../assets/icons/plus.svg';
import theme from '../../theme/theme';
import CategoryCard from './CategoryCard';
import CategoryHeader from './CategoryHeader';

const useStyles= makeStyles()(theme=>({
    box:{
        marginTop:'0.5rem',
        fontFamily: theme.typography.fontFamily,
         color:theme.typography.light_grey200,
        backgroundColor:'white',
        padding:'1.3rem',
        borderRadius:'10px',
        boxShadow: theme.effects.boxShadow,
        // width:'max-content',

    },
    title: {
        ...theme.h1
    },
    header:{
        display :'flex',
        justifyContent:'flex-start',
        width:'70%',
        alignItems:'center',
        [theme.breakpoints.down('md')] : {
            width:'100%',
            justifyContent:'space-between'
          },
  
    },
    img:{
        width:theme.icons.iconSize_100,
        cursor:'pointer !important',
    },
    more:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'end',
        alignItems:'center',
        color:theme.typography.highlighted,
        fontSize:theme.typography.font_size100
    },
    icon:{
        width:theme.icons.iconSize_100
    }
  }));


function Categories(props) {
    const {classes} = useStyles();
    const {title,subCategory,onAdd}=props;
    
    return (
        <Box className={classes.box}>
            <CategoryHeader title={title} />
            <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
             {
                subCategory?.map((item,indx)=>(
                    <CategoryCard key={`${item.subTitle}-${Math.random()}`} title={item.subTitle} imgUrl={item.imgUrl}/>
                ))
             }
             <div className={classes.more}>
                <span style={{display:'flex',flexDirection:'column',alignItems:'center',cursor:'pointer'}}>
                <img src={plus} className={classes.icon} onClick={()=>onAdd(title)} />
                <span >???????????? ??????</span>
                </span>
                <span style={{marginTop:'110%',textAlign:'center',color:`${theme.typography.light_grey200}`,cursor:'pointer'}}>?????????? <br/>??????????...</span>
             </div>
            </div>

        </Box>
    );
}

export default Categories;