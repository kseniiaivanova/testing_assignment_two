import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";
import { mockData } from "./../ts/services/__mocks__/movieservice";

//jest.mock("./../ts/services/movieservice.ts");

jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => {
      resolve({
        data: {
          Search: mockData,
        },
      });
    });
  },
}));

describe("getData", () => {
  test("should get mock data", async () => {
    //Arrange

    let searchText: string = "hej";

    //Act
    let movies: IMovie[] = await getData(searchText);

    //Assert
    expect(movies.length).toBeGreaterThan(0);
    expect(movies.length).toBe(3);
    expect(movies[0].Title).toBe("Harry Potter");
    //expect(movies)
  });

  test("should return empty array", async () => {
    //Arrange

    let searchText: string = "";

    //Act

    //Assert

    try {
      await getData(searchText);
    } catch (response: any) {
      expect(response.length).toBe(0);
    }
  });
});
