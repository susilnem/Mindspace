import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import "./booking.css";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Schedule Your Appointment!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="questions">Select Package</div>
          <select className="counsellors">
            <option value="single">Single Session</option>
            <option value="silver">Silver Package</option>
            <option value="gold">Gold Package</option>
            <option value="diamond">Diamond Package</option>
          </select>
        </Grid>

        <Grid item xs={12}>
          <div className="questions">What type of session you prefer?</div>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Physical"
                control={<Radio />}
                label="Physical"
              />
              <FormControlLabel
                value="Virtual"
                control={<Radio />}
                label="Virtual"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <div className="questions">Pick up a Date</div>
          <input type="date" className="dateinput" name="pick update" />
        </Grid>
        <Grid item xs={12}>
          <div className="questions" sx={{ paddingRight: "10px" }}>
            Pick up a Time
          </div>
          <Button variant="outlined">9AM-10AM</Button>
          <Button variant="outlined">8AM-9AM</Button>
          <Button variant="outlined">5PM-6PM</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
