import getData from "../../reducers/getData_reducer.js";

describe("sent reducers", () => {
  let initialState = {};

  initialState.data = [{}];

  it("returns proper initial state", () => {
    expect(getData(undefined, {})).toEqual({});
  });

});