import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
//URL da API: /movie/550?api_key=34ab3b6634d4033476d97769dff7b22f&language=pt-BR

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;