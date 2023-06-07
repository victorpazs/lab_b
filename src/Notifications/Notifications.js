import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import NotificationsTab from "./NotificationsTab";
import NewsTab from "./NewsTab";
import Badge from "@material-ui/core/Badge";

export default function Notifications() {
  const [notificationTab, setNotificationTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setNotificationTab(newValue);
  };

  return (
    <div style={{ overflowY: "auto" }}>
      <div style={{ overflowY: "auto" }}>
        <NotificationsTab />
      </div>
    </div>
  );
}
