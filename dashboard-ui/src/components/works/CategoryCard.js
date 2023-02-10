import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from 'tss-react/mui';
import more from '../../assets/icons/more.svg';

const useStyles= makeStyles()(theme=>({

    container:{
       boxShadow:theme.effects.boxShadow,
       fontFamily:theme.typography.fontFamily,
       fontSize:theme.typography.font_size100,
       color:theme.typography.light_grey200,
       borderRadius:'10px',
       cursor:'pointer',
       ':hover' :{
        boxShadow: '18px 4px 17px -4px rgba(0,0,0,0.1)'
    }
     },
    listItem:{
        ...theme.overrides.MuiListItem ,
    },
    icon : {
      width:theme.icons.iconSize_100,
      position:'relative',
      bottom:'55%',
      right:'5%'
    }

  }))


function CategoryCard(props) {
    const {title,imgUrl} =props;
    const {classes} = useStyles();

    return (
        <Card sx={{ maxWidth: 345 }} className={classes.container}>
        <CardMedia
          sx={{ height: 140 }}
          image={imgUrl}
          
        />
        <img src={more} className={classes.icon}/>
        <CardContent>
            {title}
        </CardContent>
      </Card>
    );
}

export default CategoryCard;