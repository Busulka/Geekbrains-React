import {REQUEST_STATUS} from "../../components/FilmsApi";
import {MAP_MOVIE_DATA, REQUEST_ERROR, REQUEST_PENDING, REQUEST_SUCCESS} from "./actions";

const initialState = {
    data: [],
    request: {
        status: REQUEST_STATUS.IDLE,
        error: null,
    },
};

export const moviesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_PENDING: {
            return {
                ...state,
                request: {
                    ...state.request,
                    error: null,
                    status: REQUEST_STATUS.PENDING,
                },
            };
        }
        case REQUEST_SUCCESS: {
            return {
                ...state,
                request: {
                    status: REQUEST_STATUS.SUCCESS,
                },
            };
        }
        case REQUEST_ERROR: {
            return {
                ...state,
                request: {
                    status: REQUEST_STATUS.ERROR,
                    error: payload,
                },
            };
        }
        case MAP_MOVIE_DATA: {
            const mappedData = payload.results.map((movie) => {
                return {
                    id: movie?.id,
                    title: movie?.title,
                    overview: movie?.overview,
                };
            });

            return {
                ...state,
                data: mappedData,
            };
        }
        default:
            return state;
    }
};