import * as React from "react";
import ghibliData from "./../data/GhibliData";
import FilmContent from "./FilmContent";
import Box from "@mui/material/Box";


const FilmCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 7,
      }}
    >
      {ghibliData.map((film) => {
        return (
          <FilmContent
            id={film.id}
            title={film.title}
            original_title={film.original_title}
            description={film.description}
            date={film.release_date}
          />
        );
      })}
    </Box>
  );
};

export default FilmCard;
