import React from "react";
import { useState } from "react";

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalResults / 10);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 10;

    let portionCount = Math.ceil(pagesCount / portionSize);

    let [portionNumber, setPortionNumber] = useState(1);
    let [pageNumber, setPageNumber] = useState(1);


    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div>
            <div className="row">
                <div className="col">
                    {
                        <button
                            className={portionNumber > 1 ? "paginatorButtonActive" : "paginatorButtonInactive"}
                            onClick={() => { setPortionNumber(portionNumber - 1) }}>Предыдущее </button>
                    }
                </div>
                <div className="col">
                    {pages
                        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(p => {
                            return <div
                                className={pageNumber === p ? "col activePage" : "col page"}
                                onClick={(e) => {
                                    // props.onPageChanged(p) 
                                    props.searchMovies(props.searchString, props.selectedType, p);
                                    setPageNumber(p)
                                    //запрос за новой страницей


                                }}>{p}</div>
                        })
                    }
                </div>
                <div className="col">
                    {
                        <button
                            className={portionCount > portionNumber ? "paginatorButtonActive" : "paginatorButtonInactive"}
                            onClick={() => { setPortionNumber(portionNumber + 1) }}>Следующее </button>
                    }
                </div>
            </div>
        </div >
    );
}

export default Paginator;