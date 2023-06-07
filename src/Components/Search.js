import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import HistoryIcon from "@material-ui/icons/History";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CropFreeIcon from "@material-ui/icons/CropFree";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import CloseIcon from "@material-ui/icons/Close";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
export default function Search() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Fab
        style={{
          backgroundColor: "#7724C3",
          color: "white",
          position: "absolute",
          bottom: 80,
          left: 10,
        }}
        onClick={handleOpen}
      >
        <TrackChangesIcon fontSize="medium" onClick={handleOpen} />
      </Fab>

      {open ? (
        <Dialog open={open} maxWidth="lg" fullWidth={true}>
          <DialogTitle>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6"> Eventos Ativos</Typography>

              <IconButton size="small" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              {lista.map((item) => (
                <Grid item xs={12} md={6} lg={4}>
                  <Box
                    style={{
                      position: "relative",
                      borderRadius: 12,
                      display: "flex",
                      flexDirection: "column",
                      minHeight: 200,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      alt="img_mission"
                      src={item.foto}
                      style={{ width: "100%", maxWidth: 400, borderRadius: 10 }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(to bottom, #00000000, #000000da)",
                        alignItems: "end",
                        justifyContent: "end",
                        display: "flex",
                      }}
                    >
                      <ListItemText
                        style={{ margin: 20 }}
                        primaryTypographyProps={{
                          style: { color: "#FFF" },
                        }}
                        secondaryTypographyProps={{
                          style: { color: "#FFFfffaa" },
                        }}
                        primary={item.nome}
                        secondary={item.data}
                      />
                    </div>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
}

const lista = [
  {
    nome: "Catedral São João Batista - Centro",
    data: "Ativo até 12:00 para novos usuários",
    foto: "https://live.staticflickr.com/6180/6217717551_8c3d4caa68_b.jpg",
  },
  {
    nome: "Praça da Bandeira - Centro",
    data: "Começa a partir das 17:30 para todos os usuários",
    foto: "https://media-cdn.tripadvisor.com/media/photo-p/1b/35/b6/23/monumento-em-homenagem.jpg",
  },
  {
    nome: "Cruz - Arroio Grande",
    data: "Ativo até dia 25/06 para todos os usuários",
    foto: "https://media-cdn.tripadvisor.com/media/photo-p/11/b1/be/7b/parque-da-santa-cruz.jpg",
  },
];
