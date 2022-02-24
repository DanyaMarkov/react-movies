import { useState } from "react";

const SelectTypeMovie = (props) => {

    const [selectedType, setSortType] = useState("all");

    const handleSwitch = (e) => {
        setSortType(e.target.dataset.type);
        console.log(selectedType);
    }

    return (
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
    );
}

export { SelectTypeMovie }



