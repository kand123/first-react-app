import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Container from "@mui/material/Container"
// import { flexbox } from "@mui/system";
// import CardMedia from '@mui/material/CardMedia'

const FilmContent = (props) => {
  const { id, title, original_title, description, date, image } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModalClose = () => {
    handleOpen();
  };

  

  const modalBoxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "1.5%",
    paddingBottom: "3%",
    width: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
  };

const buttonDivStyle = {
// height: "100%",
// display: "flex",
// flexFlow: 'column',
// marginBottom: "15%",
// position: 'relative', 
// bottom: 25,
width: '100%',

backgroundColor: 'rgb(222,222,222,.88)',
paddingTop: '9%',
paddingBottom: '5%',
borderRadius: '6px',
}

const cardStyle ={
  // backgroundColor: 'rgb(255,255,255,.85)',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: '50% 10%',
  // opacity: 0.95,
 

}

  const [value, setValue] = React.useState(0);

  return (
    <Card
    style= {cardStyle}
      className="card"
      
      sx={{
        bgcolor: "white",
        width: "300px",
        height: "450px",
        color: "black",
        padding: "0",
        
        margin: "1%",
        textAlign: "center",
        lineHeight: "25px",
        fontWeight: "medium",
      //  border: ".5px solid darkgray",
       boxShadow: "10px 5px 35px rgb(255,255,255,.3)"
      
      }}
    >

      <CardContent
      
        key={id}
        
        sx={{
          bgcolor: "white",
          color: "black",
         height:"100%",
         display: 'flex',
         flexFlow: 'column',
         justifyContent: 'flex-end',
         backgroundColor: 'rgb(255,255,255,.0001)',
        //  w: '100%',
         p: 0,
        }}
        
      >
     
        
       {/* <div>
        <Typography variant="h7">{original_title}</Typography>
        <Typography variant="h5" component="h2" mb="2%">
          {title}
        </Typography>
       
      
        <Typography
          variant="p"
          component="h4"
          position="50%"
          fontWeight="normal"
        >
          {date}
        </Typography>

        </div> */}

        <Modal key={id} open={open} onClose={handleClose}>
          <Box bgcolor="white" style={modalBoxStyle}>
            {/* <Typography variant="h5">{title}</Typography> */}
            <div>
        <Typography variant="h7">{original_title}</Typography>
        <Typography variant="h5" component="h2" mb="2%">
          {title}
        </Typography>
       
      
        <Typography
          variant="p"
          component="h4"
          position="50%"
          fontWeight="normal"
        >
          {date}
        </Typography>

        </div>
            <Typography variant="h6">Plot Summary</Typography>
            <Typography variant="p">{description}</Typography>
            <CloseIcon
              sx={{ position: "absolute", top: 20, right: 20 }}
              onClick={handleClose}
            ></CloseIcon>
          </Box>
        </Modal>
      
        <div style={buttonDivStyle}>
        <Typography variant="h6" component="h2" mb="2%">
          {title}
        </Typography>
        <Button variant="outlined" sx={{bgcolor: '#e9ab17', border: "#eac117", color: "black", mb:'2%'}} onClick={handleModalClose}>
          More Info
        </Button>
        <Box>
          <Typography component="legend">My Rating</Typography>
          <Rating sx={{p:0, m:0,}}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              
            }}
          />
        </Box>
        </div>
      </CardContent>
      
    </Card>
  );
};

export default FilmContent;



