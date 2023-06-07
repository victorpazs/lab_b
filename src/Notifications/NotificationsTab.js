import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import WarningIcon from "@material-ui/icons/Warning";
import Cell from "./Cell";
export default function NotificationsTab() {
  const [readed, setReaded] = React.useState(false);

  const list = [
    {
      title: "Você sabia?",
      subtitle:
        "Todas as paradas da cidade de Santa Cruz do Sul possuem wi-fi liberado para o uso do aplicativo!",
      severity: "info",
    },
    {
      title: "Lembrete:",
      subtitle: "Uma evento está prestes a acabar, corra que ainda da tempo!",
      severity: "warning",
    },
    {
      title: "Você sabia?",
      subtitle:
        "A Catedral São João Batista é o maior templo católico em estilo gótico da América do Sul.",
      severity: "info",
    },
    {
      title: "Lembrete:",
      subtitle:
        "As missões foram atualizadas, complete elas para ganhar moedas!",
      severity: "warning",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Typography variant="h5"> Notificações </Typography>
        <SearchIcon />
      </div>
      <Divider />
      <div style={{ padding: 20 }}>
        <Typography variant="subtitle" style={{ fontWeight: 500 }}>
          Mais recentes
        </Typography>
      </div>
      <List style={{ overflowY: "auto" }}>
        {list.map((item) => (
          <Cell
            title={item.title}
            subtitle={item.subtitle}
            severity={item.severity}
          />
        ))}
      </List>
    </>
  );
}
