import * as React from 'react'
import ghibliData from './../data/GhibliData';
import FilmContent from './FilmContent'
// import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'


const FilmCard = () => {

  // const [open, setOpen] = React.useState(false)
  // const handleOpen = () => setOpen(true)
  // const handleClose = () => setOpen(false)
 
//   const modalBoxStyle = {
//    position: 'absolute',
//    top: '50%',
//    left: '50%',
//   padding: '1%',
//   width:'50%',
//    transform: 'translate(-50%, -50%)',
//    // width: 400,
//    // height: 400,
//    bgcolor: 'white',
//    // border: '2px solid #000',
//    boxShadow: 24,
//    p: 4,
//  } 


  



return (
    <Box 
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
  >
{ghibliData.map((film) => {
    return(
       
        <FilmContent
       
        id = {film.id}
        title = {film.title}
        original_title={film.original_title}
        description={film.description}
        date={film.release_date}
        
        />
   
 
)


})}

    




</Box>

 )   
 
}

export default FilmCard