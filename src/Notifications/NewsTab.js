import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import WarningIcon from "@material-ui/icons/Warning";
import Button from "@material-ui/core/Button";

export default function NewsTab() {
  return (
    <div style={{ padding: 10 }}>
      <Card style={{ marginBottom: 20 }}>
        <CardHeader
          avatar={
            <Avatar>
              <WarningIcon style={{ color: "yellow" }} />
            </Avatar>
          }
          title="Nova grade de horários dos ônibus entra em vigor neste sábado"
        />
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image="/news1.jpg"
        />
        <CardActions>
          <Button
            style={{ marginLeft: "auto" }}
            children="SAIBA MAIS"
            size="small"
          />
        </CardActions>
      </Card>

      <Card>
        <CardHeader
          avatar={
            <Avatar>
              <WarningIcon style={{ color: "yellow" }} />
            </Avatar>
          }
          title="Greve dos ônibus em Santa Cruz do Sul é cancelada!"
        />
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image="/news2.jpg"
        />
        <CardActions>
          <Button
            style={{ marginLeft: "auto" }}
            children="SAIBA MAIS"
            size="small"
          />
        </CardActions>
      </Card>
    </div>
  );
}
