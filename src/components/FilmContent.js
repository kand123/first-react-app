
import { Card, Box } from "@material-ui/core";
import "./FilmContent.css";

const FilmContent = (props) => {
  const { id, title, original_title, description, date } = props;
  return (
    <Card key={id} className="card">
      <Box
        sx={{
          bgcolor: "#489DD4",
          color: "white",
          padding: "8%",
          textAlign: "center",
          borderRadius: "225px 1px 175px 1px",
          lineHeight: "25px",
          fontWeight: "medium",
        }}
      >
        {/* <Typography sx={{color: "textPrimary"}}> */}
        <h3>{original_title}</h3>
        <h2>{title}</h2>
        <h4>Released: {date}</h4>

        <p>{description}</p>
        {/* </Typography> */}
      </Box>
    </Card>
  );
};

export default FilmContent;
