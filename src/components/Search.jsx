import { useState } from "react";
import Paginator from "./Paginator";

const Search = (props) => {

    const [searchString, setSearchString] = useState("cowboy");
    const [selectedType, setSortType] = useState("all");
    const [pageNumber, setPageNumber] = useState(1);

    const setPage = (page) => {
        setPageNumber(page);
    }

    const handleKey = (e) => {
        if (e.key === "Enter") {
            setSearchString(searchString);
            // setcurrentList(searchString);
            props.searchMovies(searchString, selectedType, 1);
            setPage(1);
        }
    }

    const handleSwitch = (e) => {
        setSortType(e.target.dataset.type);
        // console.log("Установил его:" + e.target.dataset.type + " а в итоге имею: " + selectedType)
        //Тут надо через колбек
        props.searchMovies(searchString, e.target.dataset.type, 1);
        setPage(1);
        console.log("Установленный тип:" + selectedType);
    }

    return (
        <div>
            <div className="row">

                <div className="input-field">
                    <input
                        placeholder="Поиск по фильмам"
                        type="search"
                        className="validate"
                        value={searchString}
                        onChange={(e) => setSearchString(e.target.value)}
                        onKeyDown={handleKey} />
                </div>

                <button className="btn" onClick={
                    () => {
                        props.searchMovies(searchString, selectedType, 1)
                        setPage(1);
                    }}>
                    Поиск
                </button>
            </div>


            <div className="row">
                <label className="col">
                    <input name="group1" type="radio" data-type="all"
                        onChange={handleSwitch}
                        checked={selectedType === "all"}
                    />
                    <span>Все</span>
                </label>

                <label className="col">
                    <input name="group1" type="radio" data-type="movie"
                        onChange={handleSwitch}
                        checked={selectedType === "movie"}
                    />
                    <span>Фильмы</span>
                </label>

                <label className="col">
                    <input name="group1" type="radio" data-type="series"
                        onChange={handleSwitch}
                        checked={selectedType === "series"}
                    />
                    <span>Сериалы</span>
                </label>
            </div>

            {
                props.totalResults > 10
                    ? <Paginator searchString={searchString} selectedType={selectedType}
                        totalResults={props.totalResults} searchMovies={props.searchMovies}
                        pageNumber={pageNumber} setPage={setPage} />
                    : ""
            }


            {/* <div className="row">
                <ul class="pagination">
                    <li class="disabled"><a href="#!"><i class="material-icons">Предыдущая</i></a></li>
                    <li class="active"><a href="#!">1</a></li>
                    <li class="waves-effect"><a href="#!">2</a></li>
                    <li class="waves-effect"><a href="#!">3</a></li>
                    <li class="waves-effect"><a href="#!">4</a></li>
                    <li class="waves-effect"><a href="#!">5</a></li>
                    <li class="waves-effect"><a href="#!"><i class="material-icons">Следующая</i></a></li>
                </ul>
            </div> */}
        </div>
    );
}

export { Search }


