import { useIdentityContext } from "react-netlify-identity-gotrue";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import filmImage from "../data/images/laputa041.jpeg";
import totoroImage from "../data/images/totoro049.jpeg";
import {useHistory} from 'react-router-dom';
// import { flexbox } from '@mui/system';




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Welcome = () => {
    const history = useHistory();
const routeChange = () =>{ 
    // let path = `newPath`; 
    history.push('./films');
  }
  const identity = useIdentityContext();
  return (
    <>
      <h1
        className="font-link"
        style={{
          fontSize: "3.5rem",
          marginTop: "20px",
          marginBottom: "0",
          color: "lightblue",
        }}
      >
        Studio Ghibli FanHub
      </h1>
      <h2
            style={{
              marginBottom: "0",
              marginTop: "0",
              fontSize: "1.5rem",
              paddingTop: ".1rem",
              paddingBottom: "0",
            }}
          >
            Welcome to the most exclusive Studio Ghibli fan community!
          </h2>
      {!identity.provisionalUser && !identity.user && (
        <>
        
          <h2
            style={{
              marginBottom: "1.4rem",
              marginTop: "0",
              paddingTop: "3rem",
              fontSize: "1.8rem",
              color: "#F2E85E",
            }}
          >
            Sign up to join the fun!
          </h2>
          <Box>
            <Img src={totoroImage} alt="#" style={{ maxWidth: "600px" }} />
          </Box>

         
         
        </>
      )}

      {identity.provisionalUser && (
        <Box sx={{ height: "100vh" }}>
         <h2
            style={{
              marginBottom: "1.4rem",
              marginTop: "0",
              paddingTop: "3rem",
              fontSize: "1.6rem",
              color: "#F2E85E",
            }}
          >
            Thanks for signing up! Please check your email to verify your account.
          </h2>
        </Box>
      )}

      {identity.user && (
          <>
        <h2
        style={{
            marginBottom: "1.4rem",
            marginTop: "0",
            paddingTop: "3rem",
            fontSize: "1.6rem",
            color: "#F2E85E",
          }}
        >
          You're in! Welcome to the FanHub, {identity.user.user_metadata?.full_name}!
        </h2>
         <h3
         style={{
           marginBottom: "0",
           paddingBottom: '0',
           marginTop: "2rem",
           color: "white",
           textAlign: "center",
           fontSize: "2rem",
         }}
       >
         Explore the world of Studio Ghibli
       </h3>
       <div>
            <Box sx={{ flexGrow: 1, mt: 5, ml: 2, mr: 2, mb: 40 }}>
              <Grid
                container
                justifyContent="center"
                spacing={{ xs: 2, md: 3 }}
              >
                <Grid item xs={12} md={4}>
                  <Item
                    sx={{
                      height: 275,
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "1.1rem",
                      color: "black",
                    }}
                  >
                    FILMS
                    <ButtonBase onClick = {routeChange} sx={{ width: "100%", height: 275 }}>
                      <Img alt="complex" src={filmImage} />
                    </ButtonBase>
                  </Item>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Item
                    sx={{
                      height: 275,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    CHARACTERS
                    <ButtonBase sx={{ width: "100%", height: 275 }}>
                      <Img alt="complex" src="#" />
                    </ButtonBase>
                  </Item>
                </Grid>
                {/* <Grid item xs={12} md={4}>
          <Item>CHARACTERS</Item>
        </Grid> */}
                {/* <Grid item xs={12} md={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>xs=8</Item>
        </Grid> */}
              </Grid>
            </Box>
          </div>
       </>
      )}
       
    </>
  );
};
export default Welcome;
