import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
    withCredentials: false,
    //withCredentials  это Boolean который определяет, должны ли создаваться кросс-доменные Access-Control запросы	
    baseURL: "https://www.omdbapi.com/",
    headers: {
        // "API-KEY": "e6288c50-80dc-4884-bdc7-109e6d728316"
    }
});

export const searchAPI = {
    async getFoundMovies(searchString, movieType = "all") {
        // const response = await instance.get(`?apikey=${API_KEY}&s=${searchString}${movieType !== "all" ? `&type=${movieType}` : ""}`);
        const response = await instance.get(`?apikey=d2aefa25&s=${searchString}${movieType !== "all" ? `&type=${movieType}` : ""}`);

        //К нам поступает в виде ответа объект, содержащий разные поля. 
        //Мы берем только из свойства Search данные о фильмах
        // console.log("Сработал ПОИСК ДАННЫХ")
        // console.log("searchString= " + searchString)
        // console.log("movieType= " + movieType)
        return response.data.Search;
    },
    // async follow(userId) {
    //     const response = await instance.post(`follow/${userId}`);
    //     return response.data;
    // },
}