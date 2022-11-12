import React from 'react'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';
import Pricing from '../components/Pricing/Pricing';
import Context from '../components/AboutUS/Context';
import Hello from '../components/Carousel/Slider';

function Homepage() {
  return (
    <>
      <Box sx={{ minHeight: '80px' }}>
        <Navbar />
      </Box>
      <Hello />
      <Context />
      <Pricing />
      <Footer />
    </>

  )
}

export default Homepage