import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MenuIcon from "@material-ui/icons/Menu";
import General from "./General";
import Balance from "./Balance";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import LinearProgress from "@material-ui/core/LinearProgress";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
export default function Profile() {
  const [profileTab, setProfileTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setProfileTab(newValue);
  };

  return (
    <>
      <Box
        style={{
          height: 240,
          background: "linear-gradient(to bottom, #4601a3, #7724C3)",
          alignItems: "center",
          display: "flex",
          padding: 10,
          position: "relative",
        }}
      >
        <IconButton style={{ position: "absolute", top: 10, right: 10 }}>
          <ExitToAppIcon>logout</ExitToAppIcon>
        </IconButton>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              width: 100,
              height: 100,
              marginBottom: 10,
              margin: "0 auto",
            }}
          >
            <img
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                filter: "grayscale(1)",
              }}
              src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
            />
          </div>
          <Typography
            style={{
              color: "#FFF",
              fontWeight: "bold",
              fontSize: 25,
              fontFamily: "revert",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            JERSON
          </Typography>
          <Typography
            style={{
              color: "#FFF",
              fontWeight: "bold",
              fontSize: 22,
              fontFamily: "revert",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            Moedas: 320
          </Typography>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            <LinearProgress variant="determinate" value={80} color="primary" />
          </div>
        </div>
      </Box>
      <Paper>
        <Tabs
          style={{ height: 40, color: "#000" }}
          indicatorColor="primary"
          value={profileTab}
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab icon={<MenuIcon />} />
          <Tab icon={<EmojiEventsIcon />} />
        </Tabs>
      </Paper>
      <div style={{ padding: 20, overflowY: "auto" }}>
        {profileTab == 0 ? <General /> : profileTab == 1 ? <Balance /> : null}
      </div>
    </>
  );
}
