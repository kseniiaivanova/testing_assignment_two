import * as functions from "./../ts/functions";
import { IMovie } from "./../ts/models/Movie";

describe("movieSort", () => {
  test("should sort movies from a to z", () => {
    //Arrange
    let myMovies: IMovie[] = [
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
    //Act
    functions.movieSort(myMovies);

    //Assert

    expect(myMovies[0].Title).toBe("Alphaville");
    expect(myMovies[2].Title).toBe("Natural born killers");
  });

  test("should sort movies from z to a", () => {
    //Arrange

    let myMovies: IMovie[] = [
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

    let desc: boolean = false;
    //Act

    functions.movieSort(myMovies, desc);
    //Assert

    expect(myMovies[0].Title).toBe("Natural born killers");
    expect(myMovies[2].Title).toBe("Alphaville");
  });

  test("should not sort movies from a to z", () => {
    //Arrange
    let myMovies: IMovie[] = [
      {
        Title: "Harry Potter",
        imdbID: "22344",
        Type: "Movie",
        Poster: "Harry",
        Year: "2001",
      },
      {
        Title: "Harry Potter",
        imdbID: "22344",
        Type: "Movie",
        Poster: "Harry",
        Year: "2005",
      },
      {
        Title: "Harry Potter",
        imdbID: "22344",
        Type: "Movie",
        Poster: "Harry",
        Year: "2008",
      },
    ];

    //Act

    functions.movieSort(myMovies);

    //Assert
    expect(myMovies[0].Year).toBe("2001");
    expect(myMovies[2].Year).toBe("2008");
  });

  test("should not sort movies from z to a", () => {
    //Arrange
    let myMovies: IMovie[] = [
      {
        Title: "Harry Potter",
        imdbID: "22344",
        Type: "Movie",
        Poster: "Harry",
        Year: "2001",
      },
      {
        Title: "Harry Potter",
        imdbID: "22344",
        Type: "Movie",
        Poster: "Harry",
        Year: "2005",
      },
      {
        Title: "Harry Potter",
        imdbID: "22344",
        Type: "Movie",
        Poster: "Harry",
        Year: "2008",
      },
    ];

    let desc: boolean = false;
    //Act

    functions.movieSort(myMovies, desc);

    //Assert
    expect(myMovies[0].Year).toBe("2001");
    expect(myMovies[2].Year).toBe("2008");
  });
});
