import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Box } from "@mui/system";
import { Paper, Grid, Typography, TextField, Button } from "@mui/material";

const App = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Fragment>
      <Paper sx={{ margin: "200px" }}>
        <Typography align="center" sx={{ fontSize: "50px", color: "#42a5f5" }}>
          Sign In
        </Typography>
        <Box px={3} py={2}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                margin="dense"
                {...register("email")}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                {...register("password")}
                error={errors.password ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.password?.message}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
              fullWidth
            >
              Sign In
            </Button>
            <Typography
              variant="inherit"
              mt="10px"
              align="center"
              color="textSecondary"
            >
              No Account?
              <a
                style={{ textDecoration: "none", paddingLeft: "5px" }}
                href="/signup"
              >
                Sign up
              </a>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
};

export default App;
