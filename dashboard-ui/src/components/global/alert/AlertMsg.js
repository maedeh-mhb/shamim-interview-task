import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from 'tss-react/mui';

const useStyles= makeStyles()(theme=>({
  alert : {
    fontFamily:theme.typography.fontFamily,
    fontSize:theme.typography.font_size100
  },
  actions :{
    '&.MuiDialogActions-root' : {
        justifyContent:'flex-start !important'
    },
}
}));

function AlertMsg(props) {

    const {title,content,open,close}=props;
    const {classes} = useStyles();

  const handleClose = () => {
    close();
  };

    return (
        <Dialog
        className={classes.alert}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" color={'error'}>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button onClick={handleClose}>باشه</Button>
        </DialogActions>
      </Dialog>
    );
}

export default AlertMsg;