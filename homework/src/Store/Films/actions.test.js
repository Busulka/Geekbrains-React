import {
    getMoviesData, getMoviesError,
    getMoviesPending,
    getMoviesSuccess,
    MAP_MOVIE_DATA, mapMoviesData,
    REQUEST_ERROR,
    REQUEST_PENDING,
    REQUEST_SUCCESS
} from "./actions";


describe("getMoviesPending", () => {
    it("returns an object with specific type", () => {
        const result = getMoviesPending();
        expect(result).toEqual({ type: REQUEST_PENDING });
    });
});

describe("getMoviesSuccess", () => {
    it("returns an object with specific type and incoming data", () => {
        const data = []
        const result = getMoviesSuccess(data);
        expect(result).toEqual({type: REQUEST_SUCCESS, payload: data});
    });
});

describe("getMoviesError", () => {
    it("returns an object with specific type and incoming error", () => {
        const error = 'some error'
        const result = getMoviesError(error);
        expect(result).toEqual({type: REQUEST_ERROR, payload: error});
    });
});

describe("mapMoviesData", () => {
    it("returns an object with specific type and incoming data", () => {
        const data = ["one", "two"]
        const result = mapMoviesData(data);
        const expectedResult = {type: MAP_MOVIE_DATA, payload: data};
        expect(result).toEqual(expectedResult);
    });
});

describe("getMoviesData", () => {
    it("return an anonymous function", () => {
        const result = getMoviesData();
        expect(result).toEqual(expect.any(Function));
    });
});