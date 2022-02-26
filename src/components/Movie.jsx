import { useState } from "react";
import Modal from "../Modal/Modal";
import { searchAPI } from "../api/api";

const Movie = (props) => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    const [modalActive, setModalActive] = useState(false);
    const [movieInfo, setMovieInfo] = useState([]);


    async function getMovieDescription(movieID) {
        // setLoading(true);
        let data = await searchAPI.getDescription(id);
        setMovieInfo(data);
        // console.log(data)
        // setTotalResults(data.totalResults)
        // setLoading(false);
    }

    return (
        <div id={id} className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    poster === "N/A"
                        ? <img className="activator" src={`https://via.placeholder.com/300x420?text=${title}`} />
                        : <img className="activator" src={poster} />
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {title}
                </span>
                <p>
                    <span>{year}</span> <br />
                    <span>{type}</span>
                </p>
            </div>

            <div
                className="btn"
                onClick={() => { setModalActive(true); getMovieDescription(id); }}>
                Подробнее
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
                <div className="row">
                    <div className="col">
                        <div className="card-image waves-effect waves-block waves-light">
                            {
                                poster === "N/A"
                                    ? <img className="activator" src={`https://via.placeholder.com/300x420?text=${title}`} />
                                    : <img className="activator" src={poster} />
                            }
                        </div>
                    </div>
                    <div id={id} className="col">
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">
                                {title}
                            </span>
                            <p>
                                <span> <b>Дата выхода: </b>{movieInfo.Released}</span> <br />
                                <span><b>Возрастной рейтинг: </b>{movieInfo.Rated}</span> <br />
                                <span><b>Продолжительность: </b>{movieInfo.Runtime}</span> <br />
                                <span><b>Жанр: </b>{movieInfo.Genre}</span> <br />
                                <span><b>Режиссёр: </b>{movieInfo.Director}</span> <br />
                                <span><b>Актёры: </b>{movieInfo.Writer}</span> <br />
                                <span><b>Сценарист: </b>{movieInfo.Actors}</span> <br />

                            </p>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <h3>Про что {type === "movie" ? " фильм " : " сериал "} {title}</h3>
                    <p>
                        {movieInfo.Plot}
                    </p>
                </div>
            </Modal>
        </div>
    );
}

export { Movie }