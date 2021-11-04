import * as React from "react";
import FilmContent from "../components/FilmContent";
import Box from "@mui/material/Box";
import { useGhibliContext } from '../contexts/GhibliContext'

const FilmCard = () => {
const filmData = useGhibliContext()

  return (
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
  );
};

export default FilmCard;
