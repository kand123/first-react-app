import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useGhibliContext } from '../contexts/GhibliContext'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useIdentityContext } from "react-netlify-identity-gotrue";
// import CardAction from '@mui/material/CardAction'
// import Button from '@mui/material/Button'

const FilmDetails = () => {
const params = useParams()
const filmData = useGhibliContext()
const identity = useIdentityContext();
console.log(params)
console.log(filmData)
console.log(params.id)

const filmInfo = filmData.films.find(item => item.id === params.id)
console.log(filmInfo)
return(
<>

{!identity.user && (
    <>
    <h1 style={{marginTop: '5rem'}}>Sign up to learn more about Ghibli Films!</h1>
    <Box style={{height: '100vh'}}>

    </Box>
</>
)}


    {identity.user && (

<Box bgcolor="white" sx={{mt: 10, p: 5}}>
    <Container>
{/* <Typography variant="h5">{title}</Typography> */}
<div>

<Card sx={{ minWidth: 275, display: 'flex' }}>
      <CardContent>
        <img src={filmInfo.image} alt="#" style={{width: "300px"}}/>
      </CardContent>
      {/* <CardAction>
        <Button size="small">Go Back</Button>
      </CardAction> */}
      <div>
      <Typography variant="h4" sx={{mt: 2}}>{filmInfo.original_title}</Typography>
<Typography variant="h3" component="h3" mb="2%">
{filmInfo.title}
</Typography>
      <Typography variant="h6">Plot Summary</Typography>
<Typography variant="p">{filmInfo.description}</Typography>
</div>
    </Card>
{/* <Typography
variant="p"
component="h4"
position="50%"
fontWeight="normal"
>
{filmData.date}
</Typography> */}

</div>

</Container>
</Box>
    )}
    </>
)
}

export default FilmDetails