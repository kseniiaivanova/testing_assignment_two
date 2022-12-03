import { IMovie } from "../../models/Movie";

export const mockData: IMovie[] = [
  {
    Title: "Harry Potter",
    imdbID: "22344",
    Type: "Movie",
    Poster: "Harry",
    Year: "2001",
  },
  {
    Title: "Natural born killers",
    imdbID: "2",
    Type: "Movie",
    Poster: "Natural born killers",
    Year: "1994",
  },

  {
    Title: "Alphaville",
    imdbID: "3",
    Type: "Movie",
    Poster: "Alphaville",
    Year: "1965",
  },
];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(mockData);
  });
};
