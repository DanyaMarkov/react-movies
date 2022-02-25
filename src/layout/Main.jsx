import { useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList";
import { Search } from "../components/Search";
import { Preloader } from "../Utilities/Preloader";
import { searchAPI } from "../api/api";
// import Paginator from "../components/Paginator/Paginator";

function Main() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);

    // const [currentSearchMovies, setCurrentMovies] = ("");

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

    // async function changePage(searchString, movieType, page) {
    //     setLoading(true);

    //     let data = await searchAPI.getPages(searchString, movieType, page);

    //     setMovies(data.Search);
    //     setTotalResults(data.totalResults)
    //     setLoading(false);
    // }



    return (
        <main className="app__main container content">
            <h2>Список произведений</h2>

            <Search
                searchMovies={searchMovies}
                totalResults={totalResults}
            // changePage={changePage}
            />
            {totalResults
                ? <h4> Всего найдено: {totalResults} </h4>
                : ""
            }

            {/* <Paginator totalResults={totalResults} changePage={changePage} /> */}

            {
                loading
                    ? <Preloader />
                    : <MoviesList movies={movies} />
            }


        </main>
    );
}

export { Main }