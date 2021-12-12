import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useGhibliContext } from '../contexts/GhibliContext'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FilmDetails = () => {
const params = useParams()
const filmData = useGhibliContext()

console.log(params)
console.log(filmData)
console.log(params.id)

const filmInfo = filmData.films.find(item => item.id === params.id)
console.log(filmInfo)
return(
<Box bgcolor="white">
{/* <Typography variant="h5">{title}</Typography> */}
<div>
<Typography variant="h7">{filmInfo.original_title}</Typography>
<Typography variant="h5" component="h3" mb="2%">
{filmInfo.title}
</Typography>


{/* <Typography
variant="p"
component="h4"
position="50%"
fontWeight="normal"
>
{filmData.date}
</Typography> */}

</div>
<Typography variant="h6">Plot Summary</Typography>
<Typography variant="p">{filmInfo.description}</Typography>

</Box>
)
}

export default FilmDetails