import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import SideImg2 from "../../assets/mental_health_1.png";
import SendIcon from "@mui/icons-material/Send";

function Services() {
  return (
    <>
      <Box sx={{ width: "100%", marginTop: "90px" }}>
        <Navbar />
        <Typography
          align="center"
          variant="h6"
          sx={{ fontSize: "50px", marginTop: "130px", color: "#42a5f5" }}
        >
          Our Services
        </Typography>

        <Grid container>
          <Grid item xs={12} md={6} xl={6}>
            <Typography align="center" variant="h6" sx={{ padding: "60px" }}>
              <Typography
                sx={{
                  fontSize: "30px",
                  marginBottom: "40px",
                  color: "#42a5f5",
                }}
              >
                Need an Appointment ?
              </Typography>
              We hope to spread awareness about mental illness and why people
              should approach it as they would any other health problem.
            </Typography>
            <Box align="center">
              <a href="/booking" style={{ textDecoration: "none" }}>
                <Button
                  sx={{ padding: "15px" }}
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Book Now
                </Button>
              </a>
            </Box>
          </Grid>
          <Grid item md={6} xl={6} sx={{ display: { xs: "none", md: "flex" } }}>
            <Box sx={{ padding: "50px" }}>
              <img src={SideImg2} alt="img1" width="500px" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Services;
