import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { searchAPI } from "../api/api";
import { Preloader } from "../Utilities/Preloader";

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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    async function getMovieDescription(movieID) {
        setLoading(true);
        console.log("loading пошёл")
        let data = await searchAPI.getDescription(id);
        setMovieInfo(data);
        console.log("loading закончился")
        setLoading(false);
    }

    return (
        <div id={id} className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    poster === "N/A"
                        ? <img className="activator" src={`https://via.placeholder.com/300x420?text=${title}`} alt="Постер" />
                        : <img className="activator" src={poster} alt="Постер" />
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {title}
                </span>
                <p>
                    <span>{year}</span> <br />
                    <span>{type === "movie" ? "Фильм" : "Сериал"}</span>
                </p>
            </div>

            <div class="card-action">
                <span href="#"
                    className="btn"
                    onClick={() => {
                        setModalActive(true);
                        getMovieDescription(id);
                        setLoading(true)
                    }}>Подробнее</span>
            </div>


            <Modal active={modalActive} setActive={setModalActive}>
                {
                    loading
                        ? <Preloader />
                        : <div>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        {
                                            poster === "N/A"
                                                ? <img src={`https://via.placeholder.com/300x420?text=${title}`} alt="Постер" />
                                                : <img src={poster} alt="Постер" />
                                        }
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="">
                                        <h3>
                                            {title}
                                        </h3>
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
                        </div>
                }
            </Modal>
        </div>
    );
}

export { Movie }