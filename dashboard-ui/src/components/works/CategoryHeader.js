import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from 'tss-react/mui';
import deleteIcon from '../../assets/icons/delete.svg';
import edit from '../../assets/icons/edit.svg';

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



function CategoryHeader(props) {
    const {title}=props;
    const {classes} = useStyles();
    return (
        <div className={classes.header}>
        <h1 className={classes.title}>
           {title}
        </h1>
        <div className={classes.icons}>
        <Tooltip title="ویرایش">
             <IconButton>
                <img src={edit} className={classes.img}/>
             </IconButton>
        </Tooltip>
        <Tooltip title="حذف">
             <IconButton>
                <img src={deleteIcon} className={classes.img}/>
             </IconButton>
        </Tooltip>
        </div>
        </div>
    );
}

export default CategoryHeader;