import { useEffect, useState, lazy, Suspense } from "react";

import { Search } from "../components/Search";
import { Preloader } from "../Utilities/Preloader";
import { searchAPI } from "../api/api";

const MoviesList = lazy(
    () => import('../components/MoviesList')
);

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
                    : <Suspense fallback={<Preloader />}>
                        <MoviesList movies={movies} />
                    </Suspense>
            }
        </main>
    );
}

export default Main;