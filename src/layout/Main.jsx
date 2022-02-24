import { useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList";
import { Search } from "../components/Search";
import { SelectTypeMovie } from "../components/SelectTypeMovie";

import { Preloader } from "../Utilities/Preloader";

import { searchAPI } from "../api/api";


function Main() {

    // const [currentList, setCurrentList] = useState("cowboy");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //console.log("перерисовка!");
        searchMovies("cowboy");
        setLoading(false);
    }, []);

    async function searchMovies(searchString, movieType) {
        setLoading(true);
        let data = await searchAPI.getFoundMovies(searchString, movieType);
        setMovies(data);
        setLoading(false);
    }

    return (
        <main className="container content">
            <h1>Список фильмов</h1>
            <Search searchMovies={searchMovies} />
            {
                loading
                    ? <Preloader />
                    : <MoviesList movies={movies} />
            }

        </main>
    );
}

export { Main }