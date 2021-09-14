// import filmCard from './FilmCard'
import { Card } from "@material-ui/core";
// import { findByLabelText } from '@testing-library/dom'
import "./FilmContent.css";

const FilmContent = (props) => {
  const { id, title, original_title, description, date } = props;
  return (
     
    <Card
      key={id}
      className="card"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center",}}
    >
      <h3>{original_title}</h3>
      <h2>{title}</h2>
      <h4>Released: {date}</h4>
     
      <p>{description}</p>
    </Card>
   
  );
};

export default FilmContent;
