import React from 'react'
import { Grid, Box, Typography } from '@mui/material';
import SideImg from '../assets/img4.png'
import SideImg1 from '../assets/img3.webp'

import './context.css'

function Context() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid className='left' item xs={6}>
          <Box>
            <img src={SideImg} alt='img1' width='500px' />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography className='right' sx={{ marginTop: '120px', marginRight: '100px' }}>
              <Typography variant='h6' sx={{ fontSize: '30px', marginBottom: '20px', color: '#42a5f5' }}>
                What we do?
              </Typography>
              hdf hbsdkjhcvkjcdfl vjslfxnsdkjfn lvdfhbvnksndfjkvbsnkzxfvjskbvc sndnkjsdnckjs
              sdfbsdjhvb sdjbvk sdbvkjnsdknvkjs
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography className='left' sx={{ marginTop: '120px', marginLeft: '100px' }}>
              <Typography variant='h6' sx={{ fontSize: '30px', marginBottom: '20px', color: '#42a5f5' }}>
                How we work?
              </Typography>
              hdf hbsdkjhcvkjcdfl vjslfxnsdkjfn lvdfhbvnksndfjkvbsnkzxfvjskbvc sndnkjsdnckjs
              sdfbsdjhvb sdjbvk sdbvkjnsdknvkjs
            </Typography>
          </Box>
        </Grid>
        <Grid className='right' item xs={6}>
          <Box>
            <img src={SideImg1} alt='img1' width='500px' />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Context;