import { LANGUAGES } from "../constants/language";
import api from ".";


async function getSearch  ( { language = LANGUAGES.PT_BR, page = 1, query=QUERY }) {
    try {
        const response = await api.get(`/movie/movies?language=${language}&page=${page}&query=${QUERY}`);
    return response.data;
    } catch (error) {

    }
};

async function getLatestMovies({ language = LANGUAGES.PT_BR, page = 1  }) {
  try {
    const response = await api.get(`/movie/latest?language=${language}&page=${page}`);
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar filmes mais recentes: ", error);
  }
}

async function getSimilar ({movie_id, language = LANGUAGES.PT_BR, page = 1  }) {
  try {
    const response = await api.get(`/movie/${movie_id}/similar?language=${language}&page=${page}`);
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar filmes similares: ", error);
  }
};

async function getDetails({movie_id, language = LANGUAGES.PT_BR, page = 1  }) {
  try {
    const response = await api.get(`/movie/${movie_id}?language=${language}&page=${page}`);
    return response.data;
  } catch (error) {
    console.log("Erro ao exibir detalhes do filme: ", error);
  }
};

export default {getDetails, getLatestMovies, getSearch, getSimilar};