import React from 'react'
import TextField from '@mui/material/TextField'
import { Button, Card, CardContent, Grid, Typography } from '@mui/material'

const Contact = () => {

  
  return (
    <div>
    <Typography gutterBottom variant='h3' align='center'>
      Contact Me
    </Typography>

    <Card style={{maxWidth: 450, margin: '0 auto',padding: '20px 5px'}}>
      <CardContent>
        <Typography gutterBottom>Contact</Typography>
        <form>
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} item>
            <TextField label='Fullname' placeholder='Fullname'variant='outlined' fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField type='email' label='Email'  placeholder='Email'variant='outlined' fullWidth required/>
          </Grid>
          <Grid xs={12} item>
            <TextField type='number' label='Number' placeholder='Enter your Phone Number'variant='outlined' fullWidth required/>
          </Grid>
          <Grid xs={12} item>
            <TextField label='Message' multiline rows={4} placeholder='Type your message'variant='outlined' fullWidth required/>
          </Grid>
          <Grid xs={12} item>
            <Button type='submit' variant='contained' color='secondary' fullWidth>Submit</Button>
          </Grid>
        </Grid>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

export default Contact