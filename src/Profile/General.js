import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
export default function General() {
  return (
    <>
      {lista.map((item) => (
        <div style={{ display: "block", marginBottom: 10 }}>
          <TextField
            fullWidth
            label={item.label}
            variant="outlined"
            value={item.value}
            InputProps={{
              startAdornment: item.icone,
            }}
          />
        </div>
      ))}

      <Divider />
    </>
  );
}

const lista = [
  {
    label: "Nome",
    value: "Jerson",
    icone: <PersonIcon style={{ marginRight: 10 }} />,
  },
  {
    label: "E-mail",
    value: "jerson12345@gmail.com",
    icone: <EmailIcon style={{ marginRight: 10 }} />,
  },
  {
    label: "Telefone",
    value: "(51) 9810-1029 ",
    icone: <PhoneIcon style={{ marginRight: 10 }} />,
  },
  {
    label: "Senha",
    value: "***********",
    icone: <VpnKeyIcon style={{ marginRight: 10 }} />,
  },
];
