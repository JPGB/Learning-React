import React from "react";
import CardProto from "./CardProto";
import { Grid } from "@material-ui/core";

const Content = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <CardProto />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CardProto />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CardProto />
      </Grid>
    </Grid>
  );
};

export default Content;
