import React from "react";
import Search from "../Components/Search";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import SearchBar from "../Components/SearchBar";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { CircularProgress } from "@material-ui/core";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCYQnkRXCttl8PTsf9CRfazrGgtUvOvg6I",
  });

  return (
    <div
      style={{
        margin: "0px auto",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* <SearchBar /> */}

      {isLoaded ? (
        <>
          <GoogleMap
            streetView
            mapContainerClassName="map-container"
            center={{ lat: -29.697747, lng: -52.437179 }}
            zoom={16}
          />
          <Marker
            icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
            position={{ lat: -29.697747, lng: -52.437179 }}
          />
        </>
      ) : (
        <CircularProgress size={"80px"} style={{ margin: "auto auto" }} />
      )}
      <Search />
    </div>
  );
}
