import { createTheme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';

 const lightBlue='rgb(243,246,255)';
 const darkBlue= 'rgb(25,93,255)';
 const red= 'rgb(243,67,80)';
 const lightGrey='rgb(212,218,232)';
 const grey='rgb(125,135,162)';
 const transBlue='rgb(243,246,255)';
 const iconSize_100= '1.5rem';

// applying global styles
export default createTheme({
   
    palette: {
        common:{
            background: lightBlue,
        },
    },
    typography: {
        highlighted:darkBlue,
        light_red:red,
        light_grey100:lightGrey,
        light_grey200:grey,
        selected:transBlue,
        fontFamily: "IRANYekan",
        font_size100:'0.75rem',
        font_size200:'0.85rem',
    },
    icons: {
        iconSize_100: iconSize_100
    },
    overrides :{
        MuiListItem:{
        justifyContent:'start',
        fontSize:'0.85rem',
        color:grey,
        minHeight:'40px',
        borderRadius:'4%',
        margin:'0 10px 0 10px',
        '&.Mui-selected':{
            borderRight:` 3px solid ${darkBlue} `,
            backgroundColor:transBlue,

        },
        '& .MuiTab-iconWrapper':{
            width:iconSize_100,
            marginLeft:'0.9rem'
        }
        },
    },
    faIR
})