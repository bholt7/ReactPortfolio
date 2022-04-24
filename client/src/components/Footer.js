import React from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/material'

const Footer = () => {
  const footerStyle ={
    backgroundColor: 'black',
   borderTop:'2px solid white',
   position: 'fixed',
   width: '100%',
   bottom: '0',
   color: 'white',
   fontSize: '25px',
    }




  return (
    
    <footer style={footerStyle}>
      <Box
      sx={{
        display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
      }}
      >
      <Button href='https://github.com/bholt7' variant='contained' color='secondary'>Github</Button>
      <Button href='https://www.linkedin.com/in/brenden-holt-6102a9227/' variant='contained' color='success'>LinkdIn</Button>
      <Button href='https://www.facebook.com/brenden.holt.56' variant='contained' color='secondary'>Facebook</Button>
      </Box>
      
    </footer>
  )
}

export default Footer