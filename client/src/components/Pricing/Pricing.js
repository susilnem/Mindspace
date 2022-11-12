import * as React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";

import "./pricing.css";
export default function Pricing() {
  return (
    <Box sx={{ padding: "50px" }}>
      <Typography align="center" sx={{ fontSize: "50px", color: "#42a5f5" }}>
        Our Pricing
      </Typography>
      <Grid
        container
        sx={{ display: { xs: "flex" }, padding: "150px", marginTop: "-200px" }}
      >
        <Grid item xs={12} md={4}>
          <Paper
            className="popup"
            sx={{
              height: "400px",
              width: "300px",
              background: "linear-gradient(to right bottom, #42a5f5, #82ffa1)",
              marginTop: "120px",
            }}
          >
            <Typography
              align="center"
              sx={{ marginTop: "20px", padding: "40px" }}
            >
              <Typography
                sx={{ fontSize: "30px", marginBottom: "20px", color: "#fff" }}
              >
                Silver
              </Typography>
              This is Silver package.
              <h2>Rs 2,500/mon</h2>
              <h3> 3 Sessions</h3>
              <h4>10% off</h4>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            className="popup active"
            sx={{
              height: "400px",
              width: "300px",
              background: "linear-gradient(to right bottom, #42a5f5, #82ffa1)",
              marginTop: "120px",
            }}
          >
            <Typography
              sx={{ marginTop: "20px", padding: "40px" }}
              align="center"
            >
              <Typography
                sx={{ fontSize: "30px", marginBottom: "20px", color: "#fff" }}
              >
                Gold
              </Typography>
              This is Gold package.
              <h2>Rs 4,500/mon</h2>
              <h3> 5 Sessions</h3>
              <h4>20% off</h4>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            className="popup"
            sx={{
              height: "400px",
              width: "300px",
              background: "linear-gradient(to right bottom, #42a5f5, #82ffa1)",
              marginTop: "120px",
            }}
          >
            <Typography
              align="center"
              sx={{ marginTop: "20px", padding: "40px" }}
            >
              <Typography
                sx={{ fontSize: "30px", marginBottom: "20px", color: "#fff" }}
              >
                Diamond
              </Typography>
              This is Diamond package.
              <h2>Rs 10,500/mon</h2>
              <h3>10 Sessions</h3>
              <h4>30% off</h4>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
