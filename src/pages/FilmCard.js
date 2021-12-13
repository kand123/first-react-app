import * as React from "react";
import FilmContent from "../components/FilmContent";
import Box from "@mui/material/Box";
import { useGhibliContext } from '../contexts/GhibliContext'
import { useIdentityContext } from "react-netlify-identity-gotrue";

const FilmCard = () => {
const filmData = useGhibliContext()
const identity = useIdentityContext();

  return (
    <>
     {!identity.user && (
      
      <h2
        style={{
          marginBottom: "1.4rem",
          marginTop: "0",
          paddingTop: "3rem",
          fontSize: "1.8rem",
          color: "#F2E85E",
        }}
      >
        Sign up to learn more about Ghibli Films!
      </h2>
      )}
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 7,
      }}
    >
      {filmData.films.map((film) => {
        return (


          <FilmContent
            id={film.id}
            title={film.title}
            original_title={film.original_title}
            description={film.description}
            date={film.release_date}
            image={film.image}
          />
        );
      })}
    </Box>
    </>
  );
};

export default FilmCard;
