import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNav from "./Components/BottomNav";
import Home from "./Home/Home";
import Historic from "./Historic/Historic";
import Profile from "./Profile/Profile";
import Notifications from "./Notifications/Notifications";
import Alert from "./Alert";
import "./index.css";

function App() {
  const [tab, setTab] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  return (
    <main
      style={{
        overflow: "hidden",
        display: "flex",
        "flex-direction": "column",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#F1F5FD",
      }}
    >
      <Alert open={open} setOpen={setOpen} />
      {tab == 1 ? (
        <Home />
      ) : tab == 2 ? (
        <Historic />
      ) : tab == 3 ? (
        <Profile />
      ) : tab == 4 ? (
        <Notifications />
      ) : null}
      <div style={{ marginTop: "auto" }}>
        <BottomNav tab={tab} setTab={setTab} />
      </div>
    </main>
  );
}

export default App;
