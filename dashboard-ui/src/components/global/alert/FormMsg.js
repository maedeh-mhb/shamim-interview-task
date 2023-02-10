import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles= makeStyles()(theme=>({
  alert : {
    fontFamily:theme.typography.fontFamily,
    fontSize:theme.typography.font_size100,
},
actions :{
      '&.MuiDialogActions-root' : {
          justifyContent:'flex-start !important'
      },
  }
}));


function FormMsg(props) {
    const{field:{id,name,inputLabel,type},title,content,label,open,setOpenForm,handleData,subFields} = props;
    const [data,setData] = useState({});
    const {classes} = useStyles();

  const handleClose = () => {
    setOpenForm(false)
  };

  function changeHandler(event) {
    const {value,name} = event.target;
    console.log(value)
    data[name] =value;
    setData({...data});
  }
  function handler() {
     handleData(data);
    console.log(data)
  }
    return (
        <div>
        <Dialog open={open} onClose={handleClose} className={classes.alert}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
               {content}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id={id}
              label={inputLabel}
              type={type}
              fullWidth
              variant="standard"
              name={name}
              defaultValue={data[name]}
              onChange={(event)=>changeHandler(event)}
            />
          </DialogContent>
          <DialogActions className={classes.actions}>
            <Button onClick={()=>handler()}>{label}</Button>
            <Button onClick={handleClose}>انصراف</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default FormMsg;