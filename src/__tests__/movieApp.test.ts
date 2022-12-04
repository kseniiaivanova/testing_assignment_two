/**
 *@jest-environment jsdom
 */

import { AxiosResponse } from "axios";
import { IMovie } from "../ts/models/Movie";
import * as serviceFunc from "../ts/services/movieservice";
import { mockData } from "../ts/services/__mocks__/movieservice";
import * as mainFunc from "./../ts/movieApp";

jest.mock("./../ts/services/movieservice.ts");

describe("init", () => {
  test("should be able to call fn handleSubmit", () => {
    //Arrange
    let spy = jest.spyOn(mainFunc, "handleSubmit").mockReturnValue(
      new Promise((resolve) => {
        resolve();
      })
    );
    document.body.innerHTML = `
  <form id="searchForm">
  <button type="submit" id="search">Sök</button>
  </form>
    `;
    mainFunc.init();
    //Act
    (document.getElementById("searchForm") as HTMLFormElement)?.submit();

    //Assert
    expect(spy).toHaveBeenCalled();
    document.body.innerHTML = "";
  });
});

describe("handleSubmit", () => {
  beforeEach(() => {
    jest.resetModules();

    jest.restoreAllMocks();
  });

  test("should call createHtml", async () => {
    document.body.innerHTML = `<form id="searchForm">

    <input type="text" id="searchText" value="Falling" placeholder="Skriv titel här" />

    <button type="submit" id="search">Sök</button>

    </form>

    <div id="movie-container"></div>`;

    let spy = jest.spyOn(mainFunc, "createHtml").mockReturnValue();

    //Act

    await mainFunc.handleSubmit();

    //Assert

    expect(spy).toHaveBeenCalled();

    document.body.innerHTML = "";
  });
});

describe("createHTML", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("should create HTML for movies", async () => {
    //Arrange

    document.body.innerHTML = `<div id="movie-container"></div>`;
    let myCont: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;
    let searchText: string = "Harry Potter";
    let movies: IMovie[] = await serviceFunc.getData(searchText);

    //Act

    mainFunc.createHtml(movies, myCont);
    //Assert
    expect(document.querySelectorAll("div.movie").length).toBe(3);
    expect(document.querySelectorAll("h3").length).toBe(3);
    expect(document.querySelectorAll("img").length).toBe(3);
  });
});

describe("displayNoResult", () => {
  beforeEach(() => {
    jest.resetModules();

    jest.restoreAllMocks();
  });

  test("should display error messadge", () => {
    //Arrange

    let myCont: HTMLDivElement = document.createElement("div");
    document.body.innerHTML = "<div></div>";

    //Act
    mainFunc.displayNoResult(myCont);

    //Assert

    expect(myCont.innerHTML).toBe("<p>Inga sökresultat att visa</p>");
  });
});
