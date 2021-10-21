import * as React from 'react'
import axios from 'axios'

const GhibliContext = React.createContext({
    films: [],
})


export const GhibliContextProvider = (props) => {
    const [films, setFilms] = React.useState([])

    React.useEffect(() => {
    const fetchFilms = async () => {
        const ghibliURL = `/.netlify/functions/ghiblifilmdata`
        
        try {
const FilmResponse = await axios.get(ghibliURL)
const films = await FilmResponse.data
console.log(FilmResponse.data[0])
setFilms(films)
return{
statuscode: 200,
body: JSON.stringify(FilmResponse.data)

}
// setFilms(ghibliFilm)
 
        }
        catch(error) {
            console.log(error)
        }
    }
    fetchFilms()
    }, [])
    return (
        <GhibliContext.Provider value={{
            films
        }}>
            {props.children}
        </GhibliContext.Provider>
    )
}

export const useGhibliContext = () => React.useContext(GhibliContext)