import { describe, expect, it } from "@jest/globals";
import { main } from "./index";

describe("grid problem", () => {
  it("will return result as start point", () => {
    const result = main(["N E N E N E N E", "-4", "-4"]);

    expect(result).toEqual({ x: 0, y: 0 });
  });

  it("will return result null", () => {
    const result = main(["N E N E N E N E"]);

    expect(result).toBeNull();
  });

  it("will throw the error", () => {
    const result = () => main(["X Y Z", "-4", "-4"]);

    expect(result).toThrow(new Error("Incorrect command"));
  });

  it("will throw the error because of out of boundary for south west corner", () => {
    const result = () => main(["S W S W S W S", "-4", "-4"]);

    expect(result).toThrow(new Error("Out of boundary"));
  });

  it("will return a result for S W N E S W", () => {
    const result = main(["S W N E S W", "0", "0"]);

    expect(result).toEqual({ x: -1, y: -1 });
  });

  it("will return a result North", () => {
    const result = main(["N N N N N", "0", "0"]);

    expect(result).toEqual({ x: 0, y: 5 });
  });

  it("will throw an Error for North", () => {
    const result = () => main(["N N N N N N", "0", "0"]);

    expect(result).toThrow(new Error("Out of boundary"));
  });
});
