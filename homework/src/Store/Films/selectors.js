import {REQUEST_STATUS} from "../../components/FilmsApi";


export const selectMovies = (state) => state.movies.data;
export const selectMoviesLoading = (state) => state.movies.request.status === REQUEST_STATUS.PENDING;
export const selectMoviesError = (state) => state.movies.request.error;