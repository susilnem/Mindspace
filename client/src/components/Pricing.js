import * as React from 'react';
import { Grid, Box,Typography,Paper } from '@mui/material';
// import zIndex from '@mui/material/styles/zIndex';


 import './pricing.css'
export default function Pricing() {

  return (
    <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={4}>
      <Paper className='popup'
                sx={{
                  height: 350,
                  width: 300,
                //   backgroundColor: (theme) =>
                //     theme.palette.mode === 'dark' ? '#1A2027' : '#42a5f5',
                // marginRight:'70PX',
                    marginLeft:'100px',
                    padding:'10px',
                    marginTop:'120px',
                    background:'linear-gradient(to right bottom, #42a5f5, #82ffa1)'
                }}
              >
                   <Typography align='center' sx={{marginTop:'10px'}}>
                   <Typography variant='h6'  sx={{fontSize:'30px', marginBottom:'20px',  color:'#fff'}}>
           Silver
          </Typography>
          hdf hbsdkjhcvkjcdfl vjslfxnsdkjfn lvdfhbvnksndfjkvbsnkzxfvjskbvc sndnkjsdnckjs
          sdfbsdjhvb sdjbvk sdbvkjnsdknvkjs
        </Typography>

              </Paper>
      </Grid>
      <Grid item xs={4}>
      <Paper className='popup active'
                sx={{
                  height: 350,
                  width: 300,
                  background:'linear-gradient(to right bottom, #42a5f5, #82ffa1)',
                    marginLeft:'50px',
                    padding:'10px',
                    marginTop:'120px',
                }}
              >
                   <Typography sx={{marginTop:'10px'}}  align='center'>
                   <Typography variant='h6'  sx={{fontSize:'30px', marginBottom:'20px',  color:'#fff'}}>
           Gold
          </Typography >
          hdf hbsdkjhcvkjcdfl vjslfxnsdkjfn lvdfhbvnksndfjkvbsnkzxfvjskbvc sndnkjsdnckjs
          sdfbsdjhvb sdjbvk sdbvkjnsdknvkjs
        </Typography>

              </Paper>
      </Grid>
      <Grid item xs={4}>
      <Paper className='popup'
                sx={{
                  height: 350,
                  width: 300,
                  background:'linear-gradient(to right bottom, #42a5f5, #82ffa1)',
                    // marginLeft:'10px',
                    padding:'10px',
                    marginTop:'120px'
                }}
              >
                   <Typography  align='center' sx={{marginTop:'10px'}}>
          <Typography variant='h6' sx={{fontSize:'30px', marginBottom:'20px',  color:'#fff'}}>
           Diamond
          </Typography>
          hdf hbsdkjhcvkjcdfl vjslfxnsdkjfn lvdfhbvnksndfjkvbsnkzxfvjskbvc sndnkjsdnckjs
          sdfbsdjhvb sdjbvk sdbvkjnsdknvkjs
        </Typography>

              </Paper>
      </Grid>
    
    </Grid>
  </Box>
  );
}