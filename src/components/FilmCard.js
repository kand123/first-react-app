import ghibliData from './../data/GhibliData';
import FilmContent from './FilmContent'


const FilmCard = () => {
    console.log(ghibliData)
return (
    <div>
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
</div>
 )   
 
}

export default FilmCard