import { Movie } from "./Movie";


const MoviesList = (props) => {
    const { movies = [] } = props;
    return (
        <div className="movies">

            {
                movies.length
                    ? movies.map(movie => {
                        return <Movie key={movie.imdbID} {...movie} />
                    })
                    : <h3>Ничего не найдено</h3>
            }
        </div>
    );
}

export { MoviesList }