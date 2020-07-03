import React from "react";
import "./styles.css";
import { Button, Typography, Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import Header from "./Header";
import Content from "./Content";

export default function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}
