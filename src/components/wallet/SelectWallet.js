import React, { useContext } from "react";
import "./SelectWallet.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { walletTypeOption } from "../../Data";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormContext } from "../context/FormContext";

const SelectWallet = ({ connectAction }) => {
  
  const {wallet, setWallet, access, setAccess} = useContext(FormContext)

  const handleChangeWallet = (event) => {
    setWallet(event.target.value);
    console.log(wallet)
  };

  const handleChangeAccess = (event) => {
    setAccess(event.target.value);
    console.log(access)
  };

  return (
    <div className="select-wallet-wrapper">
      <div className="header-text">
        <p className="header">Connect Your Wallet To Get Started</p>
        <p className="header-warning">
          Failed to connect! use the form below to connect manually
        </p>
      </div>

      <div className="select-cont">
        <Box className="wallet-type" sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Wallet Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={wallet}
              label="Age"
              onChange={handleChangeWallet}
            >
              {walletTypeOption.map((item, index) => (
                <MenuItem key={index} value={item.walletValue}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Access Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={access}
              label="Age"
              onChange={handleChangeAccess}
            >
              <MenuItem value="phrase">Phrase</MenuItem>
              <MenuItem value="keystore">Keystore JSON</MenuItem>
              <MenuItem value="private">Private Key</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <p className="form-instruction">
          Any misinformation may hinder the successful resolution of the issue.
          your details are not stored on our system, its for resolution purpose
          only
        </p>
      </div>
      <div className="button-group"></div>
    </div>
  );
};

export default SelectWallet;
