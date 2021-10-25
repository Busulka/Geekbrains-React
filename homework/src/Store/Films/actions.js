import {MOVIE_API_KEY, MOVIE_API_URL, POPULAR_MOVIE} from "../../components/FilmsApi";

export const REQUEST_PENDING = "MOVIES::REQUEST_PENDING";
export const REQUEST_SUCCESS = "MOVIES::REQUEST_SUCCESS";
export const REQUEST_ERROR = "MOVIES::REQUEST_ERROR";
export const MAP_MOVIE_DATA = "MOVIES::MAP_DATA";

export const getMoviesPending = () => ({
    type: REQUEST_PENDING,
});

export const getMoviesSuccess = (moviesData) => ({
    type: REQUEST_SUCCESS,
    payload: moviesData,
});

export const getMoviesError = (error) => ({
    type: REQUEST_ERROR,
    payload: error,
});


export const mapMoviesData = (moviesData) => ({
    type: MAP_MOVIE_DATA,
    payload: moviesData,
})

export const getMoviesData = () => async (dispatch) => {
    dispatch(getMoviesPending());

    try {
        const response = await fetch(MOVIE_API_URL + POPULAR_MOVIE + MOVIE_API_KEY);
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }
        const result = await response.json();
        dispatch(mapMoviesData(result))

        dispatch(getMoviesSuccess());
    } catch (err) {
        dispatch(getMoviesError(err.message));
    }
};