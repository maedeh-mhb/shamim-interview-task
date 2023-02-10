import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import folder from '../../assets/icons/folder.svg';
import app from '../../assets/images/app.png';
import books from '../../assets/images/books.jpg';
import drink from '../../assets/images/drink.jpg';
import theme from '../../theme/theme';
import Categories from './Categories';
import Header from './Header';
import AlertMsg from '../global/alert/AlertMsg';
import FormMsg from '../global/alert/FormMsg';

const useStyles= makeStyles()(theme=>({
    card :{
        padding:'10px',
        borderRadius:'20px',
        width:'max-content',
        fontFamily: theme.typography.fontFamily,
         color:theme.typography.highlighted,
         fontSize:theme.typography.font_size100,
         display:'flex',
         alignItems:'center',
         cursor:'pointer'
    }
  }));

function Works(props) {
    const {classes} = useStyles();
    const [open,setOpen] = useState(false);
    const [openForm,setOpenForm]=useState(false);

    const [categories,setCategories] = useState([
            {title:'تدوین و صداگذاری', subCategory : [{
                subTitle: 'تدوین تیزر تبلیغاتی نوشیدنی انرژی زا',
                imgUrl: drink
            },
            {
                subTitle: 'تدوین تیزر تبلیغاتی نوشیدنی انرژی زا',
                imgUrl: drink
            }, 
            {
                subTitle: 'تدوین تیزر تبلیغاتی نوشیدنی انرژی زا',
                imgUrl: drink
            },  ]
            },
            {title:'طراحی و گرافیک', subCategory : [{
                subTitle: 'طراحی سایت آموزشی آشپزی',
                imgUrl: app
            },
            {
                subTitle: 'طراحی سایت آموزشی آشپزی',
                imgUrl: app
            },  
              ]
            },
            {title:'گویندگی و خوانندگی', subCategory : [{
                subTitle: 'خوانش کتاب صوتی "نیمه شب"',
                imgUrl: books
            },
            {
                subTitle: 'خوانش کتاب صوتی "نیمه شب"',
                imgUrl: books
            },  
            {
                subTitle: 'خوانش کتاب صوتی "نیمه شب"',
                imgUrl: books
            },  ]
            },
       ]);

       function onAddCategory (title) {
            let addedCategory= categories.find((item)=>item.title === title);
            let newInd= categories.findIndex((category)=>category.title === title);
            if(categories[newInd].subCategory.length <10) {
                categories[newInd].subCategory.push(addedCategory.subCategory[0]);
                setCategories([...categories])
            }
            else {
                setOpen(true);
                console.log(open)
               
            }
       };
       function handleClose() {
        setOpen(false)
       };
       
       function handleForm() {
        setOpenForm(true);
       };

       function formDataHandler(data) {
        console.log(data)
        let newCat= [{title: data.category,subCategory:[]}];
        setCategories([...categories,...newCat]);
        console.log(newCat,categories)
       };

       const formProps={
        field: {
            id: 'name',
            name:'category',
            inputLabel:'',
            type:'text',
        },
        content:'نام اثر را وارد کنید',
        label:'تایید',
        open:openForm,
        setOpenForm:setOpenForm,
        handleData:formDataHandler
       }

    return (
        <Box style={{display:'flex',flexDirection:'column', gap:'10px', marginBottom:'3rem'}}>
            <Header />
            {categories.map((category,ind)=>(
                <Categories key={ind} {...category} onAdd={onAddCategory}/>
            ))}
            <Card elevation={0} className={classes.card}>
                <img src={folder} style={{width:`${theme.icons.iconSize_100}`}}/>
                <span onClick={handleForm}>
                افزودن دسته جدید
                </span>
            </Card>
            {
                open &&  <AlertMsg title="خطا" content={"نمی توانید بیشتر از 10 اثر وارد کنید"} 
                open={open} 
                close={handleClose}
                 />
            }
             {
                openForm &&  <FormMsg {...formProps}

                 />
            }
        </Box>
    );
}

export default Works;