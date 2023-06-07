import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";

import GamepadIcon from "@material-ui/icons/Gamepad";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import PlaceIcon from "@material-ui/icons/Place";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

export default function Historic() {
  return (
    <div style={{ overflowY: "auto" }}>
      <AppBar
        style={{
          height: 120,
          background: "linear-gradient(to bottom, #4601a3, #7724C3)",
          alignItems: "center",
        }}
      >
        <Typography
          align="center"
          style={{
            color: "#FFF",
            fontWeight: "bold",
            fontSize: 25,
            fontFamily: "revert",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            height: "100%",
          }}
        >
          <GamepadIcon style={{ marginRight: 10 }} />
          {"MISSÕES"}
        </Typography>
      </AppBar>
      <div style={{ marginTop: 130, padding: 10 }}>
        <div style={{ padding: 3, gap: 10 }}>
          {lista.map((item) => (
            <Card
              style={{
                color: "#000",
                marginBottom: 10,
                borderRadius: 10,
                padding: 8,
                minHeight: 112,
                display: "flex",
                alignItems: "center",
              }}
            >
              <ListItem style={{ minWidth: "100%" }}>
                <ListItemAvatar>
                  <Typography
                    align="center"
                    style={{
                      fontWeight: "bold",
                      fontFamily: "revert",
                    }}
                  >
                    {item.icone}
                  </Typography>
                </ListItemAvatar>
                <ListItemText
                  style={{ fontWeight: 500, marginLeft: 10 }}
                  primary={
                    <b style={{ color: "#003015", fontSize: "0.9rem" }}>
                      {item.missao}
                    </b>
                  }
                  secondary={item.recompensa}
                />
                <ListItemText
                  style={{ textAlign: "end" }}
                  primary={item.progresso}
                />
              </ListItem>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const lista = [
  {
    icone: <DirectionsWalkIcon fontSize="large" />,
    missao: "Dê 500 passos em volta da cidade!",
    recompensa: "Recompensa: 50 moedas",
    progresso: "500/500",
  },
  {
    icone: <PlaceIcon fontSize="large" />,
    missao: "Visite 5 pontos turísticos da cidade ainda hoje!",
    recompensa: "Recompensa: 100 moedas",
    progresso: "1/5",
  },
  {
    icone: <RestaurantIcon fontSize="large" />,
    missao: "Almoçe em um restaurante tradicional da cidade!",
    recompensa: "Recompensa: 130 moedas",
    progresso: "0/1",
  },
  {
    icone: <EventAvailableIcon fontSize="large" />,
    missao: "Participe de um evento disponível!",
    recompensa: "Recompensa: 100 moedas",
    progresso: "0/1",
  },
];
