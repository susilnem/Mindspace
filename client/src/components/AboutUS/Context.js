import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import SideImg from "../../assets/mental_health4.png";
import SideImg1 from "../../assets/mental_health3.webp";
import SideImg2 from "../../assets/mental_health_1.png";
import Navbar from "../Navbar/Navbar";

function Context() {
  return (
    <Box sx={{ width: "100%", marginTop: "90px" }}>
      <Navbar />
      <Typography align="center" sx={{ fontSize: "50px", color: "#42a5f5" }}>
        About Us
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item md={6} xl={6} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ padding: "50px" }}>
            <img src={SideImg} alt="img1" width="500px" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={6}>
          <Typography
            align="center"
            sx={{ marginTop: "100px", padding: "50px" }}
          >
            <Typography
              sx={{ fontSize: "30px", marginBottom: "20px", color: "#42a5f5" }}
            >
              Who are we?
            </Typography>
            MindSpace is a hackathon project started by a group of 5
            individuals, who are motivated to solve the real-world problem of
            this world with the help of technology. Other than being just a
            hackathon project, we have realized that this project can go to the
            real world and help people improve their mental health.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} xl={6}>
          <Typography
            align="center"
            sx={{ marginTop: "100px", padding: "50px" }}
          >
            <Typography
              sx={{ fontSize: "30px", marginBottom: "20px", color: "#42a5f5" }}
            >
              What we do?
            </Typography>
            At MindSpace, we aim to be the platform for people dealing with
            mental health issues, which are becoming increasingly common.
            <br />
            Regardless of whether you're anxious, depressed, or suffering from
            any other mental illness, we aim to become your go-to place.
            <br />
            Dedicated to becoming the leading place for people suffering from
            mental illness, MindSpace has the vision to become the place where
            people come to get help.
            <br />
            We hope to spread awareness about mental illness and why people
            should approach it as they would any other health problem.
          </Typography>
        </Grid>
        <Grid item md={6} xl={6} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ padding: "50px" }}>
            <img src={SideImg1} alt="img1" width="500px" />
          </Box>
        </Grid>
        <Grid item md={6} xl={6} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ padding: "50px" }}>
            <img src={SideImg2} alt="img1" width="500px" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={6}>
          <Typography
            align="center"
            sx={{ marginTop: "100px", padding: "50px" }}
          >
            <Typography
              sx={{ fontSize: "30px", marginBottom: "20px", color: "#42a5f5" }}
            >
              How we work?
            </Typography>
            MindSpace allows users to know themself and realize what they are
            going through just by answering some of the questions asked by the
            system. Additionally, we offer users the opportunity to speak to
            someone who has already recovered from a mental illness aka "Ghost
            Person" since they are completely anonymous. Last but not least, we
            help users find and book doctors based on their needs.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Context;
