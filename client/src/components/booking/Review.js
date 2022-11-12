import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import esewa from "../../assets/esewa.jpg";
import khalti from "../../assets/download.jpeg";
import imepay from "../../assets/imepay.png";

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Appointment Summary
      </Typography>
      <Typography variant="h7" gutterBottom sx={{ mt: 2 }}>
        Your Appointment is Scheduled on 12th of November at 9:00 AM with
        Dr.Saugat Ghimire
      </Typography>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Typography variant="h9" gutterBottom sx={{ mt: 0 }}>
            Your bill is <br />
            Single Session: NPR. 1000
            <br />
            <br />
            Complete your payment
            <br />
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="esewa"
              name="radio-buttons-group"
            >
              <div style={{ display: "inline-flex " }}>
                <FormControlLabel value="esewa" control={<Radio />} />
                <img src={esewa} alt="esewa" style={{ width: "45px" }}></img>
              </div>
              <div style={{ display: "inline-flex" }}>
                <FormControlLabel value="khalti" control={<Radio />} />
                <img src={khalti} alt="khalti" style={{ width: "60px" }}></img>
              </div>
              <div style={{ display: "inline-flex" }}>
                <FormControlLabel value="imepay" control={<Radio />} />
                <img src={imepay} alt="imepay" style={{ width: "60px" }}></img>
              </div>
            </RadioGroup>
          </Typography>
        </Grid>
        <Grid item container direction="row" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Clinic's Location
          </Typography>
          <Typography variant="h9" gutterBottom sx={{ mt: 2 }}>
            Ace Institute of Management, Minbhawan Marg, Naya Baneshwar,
            Kathmandu 44703, Nepal
            <br />
            <br />
            Location coordinates are: Latitude: 27.691012 / N 27° 41' 27.642''
            Longitude: 85.339404 / E 85° 20' 21.853''
          </Typography>
        </Grid>
        <Grid item xs={11} sm={6}>
          <Typography gutterBottom></Typography>
          <Typography gutterBottom></Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
