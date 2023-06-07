import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TimelineIcon from "@material-ui/icons/Timeline";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import Divider from "@material-ui/core/Divider";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Title } from "chart.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import Card from "@material-ui/core/Card";

Chart.register(ArcElement, Title);

const data = {
  datasets: [
    {
      backgroundColor: ["#7120BF", "#F1F5FD"],
      data: [20, 80],
      hoverOffset: 5,
      weight: 5,
    },
  ],
};
const options = {
  type: "doughnut",
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 1,
  layout: {
    padding: 10,
  },
  plugins: {
    title: {
      display: false,
    },
  },
};

export default function Balance() {
  return (
    <>
      <Paper
        style={{
          borderRadius: 15,
          padding: 20,
          display: "block",
        }}
        elevation={5}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          Complete todas as missões para ganhar 500 moedas!
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            marginTop: 10,
          }}
        >
          <div style={{ alignText: "center" }}>
            <div style={{ marginLeft: 20, fontSize: 20, fontWeight: "bold" }}>
              Progresso:
            </div>
            <div
              style={{
                marginLeft: 15,
                color: "#000046",
                fontSize: 60,
                fontWeight: "bold",
              }}
            >
              20%
            </div>
          </div>
          <div style={{ maxWidth: "60%" }}>
            <Doughnut data={data} options={options} />
          </div>
        </div>
      </Paper>
      <Card
        style={{
          marginTop: 20,
          borderRadius: 10,
          padding: 8,
          display: "flex",
          alignItems: "center",
        }}
        elevation={5}
      >
        <ListItem>
          <ListItemAvatar>
            <Typography
              align="center"
              style={{
                color: "#003015",
                fontWeight: "bold",
                fontFamily: "revert",
              }}
            >
              <TrackChangesIcon fontSize="large" />
            </Typography>
          </ListItemAvatar>
          <ListItemText
            style={{ fontWeight: 500 }}
            primary={
              <div style={{ display: "flex", alignItems: "center" }}>
                <b style={{ color: "#003015", fontSize: "0.9rem" }}>
                  Ainda há missões a serem concluídas!
                </b>
                <Button
                  size="small"
                  children="IR!"
                  variant="contained"
                  style={{ backgroundColor: "#7120BF", color: "#fff" }}
                />
              </div>
            }
          />
        </ListItem>
      </Card>
    </>
  );
}
