import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";

let _time;

const Alert = ({ open, setOpen }) => {
  const notification = () => {
    _time = setTimeout(() => {
      setOpen(true);
      clearTimeout(_time);
    }, 30000);
  };

  React.useEffect(() => {
    notification();
  }, []);

  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  return (
    <Snackbar
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={SlideTransition}
      message="Novo Evento Disponível! Corre para conferir!"
    />
  );
};

export default Alert;
