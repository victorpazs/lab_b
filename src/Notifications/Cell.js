import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import WarningIcon from "@material-ui/icons/Warning";

const Cell = ({ severity, title, subtitle }) => {
  const [readed, setReaded] = React.useState(false);

  return (
    <ListItem
      style={{ backgroundColor: !readed ? "#681AB955" : "#fff", gap: 6 }}
      button
      onClick={() => setReaded(true)}
    >
      <ListItemAvatar>
        {severity == "info" ? (
          <InfoIcon fontSize="large" style={{ color: "#003015" }} />
        ) : (
          <WarningIcon fontSize="large" style={{ color: "#003015" }} />
        )}
      </ListItemAvatar>
      <ListItemText primary={title} secondary={subtitle} />

      {!readed && <FiberManualRecordIcon style={{ color: "#003015" }} />}
    </ListItem>
  );
};

export default React.memo(Cell);
