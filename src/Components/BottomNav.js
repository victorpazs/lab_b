import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonIcon from "@material-ui/icons/Person";
import MapIcon from "@material-ui/icons/Map";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";

export default function BottomNav({ tab, setTab }) {
  return (
    <BottomNavigation
      style={{
        borderTopStyle: "solid",
        borderWidth: 1,
        borderColor: "#EFF1F3",
      }}
    >
      <BottomNavigationAction
        onClick={() => {
          setTab(1);
        }}
        style={{ backgroundColor: tab == 1 ? "#7724C3" : "#FFF" }}
        label="Mapa"
        icon={<MapIcon style={{ color: tab == 1 ? "#fff" : "#003015" }} />}
      />
      <BottomNavigationAction
        onClick={() => {
          setTab(2);
        }}
        style={{ backgroundColor: tab == 2 ? "#7724C3" : "#FFF" }}
        label="Missões"
        icon={
          <FormatListBulletedIcon
            style={{ color: tab == 2 ? "#fff" : "#003015" }}
          />
        }
      />

      <BottomNavigationAction
        onClick={() => {
          setTab(3);
        }}
        style={{ backgroundColor: tab == 3 ? "#7724C3" : "#FFF" }}
        label="Perfil"
        icon={<PersonIcon style={{ color: tab == 3 ? "#fff" : "#003015" }} />}
      />
      <BottomNavigationAction
        onClick={() => {
          setTab(4);
        }}
        style={{ backgroundColor: tab == 4 ? "#7724C3" : "#FFF" }}
        label="Notificações"
        icon={
          <NotificationsIcon style={{ color: tab == 4 ? "#fff" : "#003015" }} />
        }
      />
    </BottomNavigation>
  );
}
