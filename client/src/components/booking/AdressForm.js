import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import "./booking.css";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Questions
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              What type of therapy do you want?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="individual"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="individual"
                control={<Radio />}
                label="Individual Therapy"
              />
              <FormControlLabel
                value="Couple Therapy"
                control={<Radio />}
                label="Couple Therapy"
              />
              <FormControlLabel
                value="couple"
                control={<Radio />}
                label="Teen Therapy"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {/* <div className="questions">What is your gender identity?</div> */}
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              What is your gender identity
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <div className="questions">Counsellor</div>
          <select className="counsellors">
            <option value="Saugat">Dr.Saugat Ghimire</option>
            <option value="Sonika Acharya">Dr. Sonika Acharya</option>
            <option value="Sushil">Dr. Sushil Tiwari</option>
            <option value="Bhupendra">Dr.Bhupendra Bhatta</option>
          </select>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Agree to the terms and conditions"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
