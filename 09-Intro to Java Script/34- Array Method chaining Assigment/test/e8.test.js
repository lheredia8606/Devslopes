import { describe, expect, it } from "vitest";
import { findPlanetNameByMoon } from "../exercises/e8";
import { data } from "../data/data";

describe("findPlanetNameByMoon", () => {
  it("Should exist", () => {
    expect(findPlanetNameByMoon).toBeInstanceOf(Function);
  });
  it("Should be the planet Neptune for Triton moon", () => {
    expect(findPlanetNameByMoon(data,'Triton')).toEqual('Neptune');
  });
  it("Should be the planet Saturne for Titan moon", () => {
    expect(findPlanetNameByMoon(data,'Titan')).toEqual('Saturne');
  });
});
