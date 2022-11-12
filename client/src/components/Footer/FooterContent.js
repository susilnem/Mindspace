import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/material";

function FooterContent() {
  return (
    <Box sx={{ marginTop: "-10px" }}>
      <Stack spacing={3}>
        <Box sx={{ display: "inline" }}>
          <FacebookRoundedIcon />
          <TwitterIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center ",
            flexDirection: "row",
          }}
        >
          <Typography sx={{ paddingRight: "5px" }}>Home</Typography>
          <Typography sx={{ paddingRight: "5px" }}>About Us</Typography>
          <Typography sx={{ paddingRight: "5px" }}>Services</Typography>
          <Typography sx={{ paddingRight: "5px" }}>Blogs</Typography>
        </Box>
        <Box>&copy; Copyright 2022</Box>
      </Stack>
    </Box>
  );
}

export default FooterContent;
