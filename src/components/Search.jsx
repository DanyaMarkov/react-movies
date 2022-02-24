import { useState } from "react";

const Search = (props) => {

    // const [currentList, setcurrentList] = useState("");
    const [searchString, setSearchString] = useState("");
    const [selectedType, setSortType] = useState("all");


    const handleKey = (e) => {
        if (e.key === "Enter") {
            setSearchString(searchString);
            // setcurrentList(searchString);
            props.searchMovies(searchString, selectedType);
        }
    }

    const handleSwitch = (e) => {
        setSortType(e.target.dataset.type);
        // console.log("Установил его:" + e.target.dataset.type + " а в итоге имею: " + selectedType)
        //Тут надо через колбек
        props.searchMovies(searchString, e.target.dataset.type);
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
                        props.searchMovies(searchString, selectedType)
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
        </div>
    );
}

export { Search }


