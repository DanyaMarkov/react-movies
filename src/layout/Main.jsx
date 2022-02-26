import { useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList";
import { Search } from "../components/Search";
import { Preloader } from "../Utilities/Preloader";
import { searchAPI } from "../api/api";

const Main = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        searchMovies("cowboy");
        setLoading(false);
    }, []);

    async function searchMovies(searchString, movieType, page) {
        setLoading(true);
        let data = await searchAPI.getFoundMovies(searchString, movieType, page);
        setMovies(data.Search);
        setTotalResults(data.totalResults)
        setLoading(false);
    }

    return (
        <main className="app__main container content">

            <h2>Список произведений</h2>

            <Search
                searchMovies={searchMovies}
                totalResults={totalResults}
            />
            {totalResults
                ? <h4> Всего найдено: {totalResults} </h4>
                : ""
            }
            {
                loading
                    ? <Preloader />
                    : <MoviesList movies={movies} />
            }
        </main>
    );
}

export { Main }