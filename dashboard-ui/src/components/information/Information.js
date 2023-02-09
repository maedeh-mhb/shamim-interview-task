import Box from '@mui/material/Box';
import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import CardsHeader from '../cards/CardsHeader';
import OptionCard from '../cards/OptionCard';
import TagCard from '../cards/TagCard';
import TextCard from '../cards/TextCard';



const useStyles= makeStyles()(theme=>({
    container:{
        marginRight:'0.8rem',
        marginTop:'0.5rem',
        padding:'1.3rem',
        width:'30%',
        backgroundColor:'white',
        borderRadius:'10px',
        [theme.breakpoints.down('md')] : {
            marginRight:'0.8rem',
            width:'12rem'
          },
    
    }
  }));

function Information(props) {
    const {classes} = useStyles();
    const [tags,setTags]=useState(['تجربه کاربری','طراحی سایت','گرافیک']);
    const [options,setOptions] = useState(['کارشناسی کامپیوتر-دانشگاه تبریز','udemy-مبانی طراحی']);
    const [text,setText]=useState('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است')

    const cardTtitles=[{title:'تگ لاین ها',type:'tag'},
    {title:'درباره من',type:'text'},
    {title:'مهارت ها',type:'tag'},
    {title:'گواهینامه ها و مدارک تحصیلی',type:'list'},
    {title:' سوابق شغلی',type:'list'}];

    const tagProps={
        tags:tags
    };
    const optionProps={
        options:options
    }
    const textProps={
        text:text
    };

    return (
        <Box className={classes.container}>
            {cardTtitles.map((card)=>
            <>
                <CardsHeader title={card.title}/>
                {card.type === 'tag' ? <TagCard {...tagProps}/> : card.type === 'list' ? <OptionCard {...optionProps}/> : <TextCard {...textProps}/>}
            </>
 
            )}
        </Box>
    );
}

export default Information;