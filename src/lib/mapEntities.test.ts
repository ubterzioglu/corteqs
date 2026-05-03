import { describe, expect, it } from "vitest";
import { getAllMapEntities, lookupForBot } from "./mapEntities";

describe("mapEntities", () => {
  it("builds searchable entities from provider data", () => {
    const entities = getAllMapEntities();

    expect(entities.length).toBeGreaterThan(0);
    expect(entities.some((entity) => entity.city === "Dubai")).toBe(true);
    expect(entities.every((entity) => entity.address.length > 0)).toBe(true);
  });

  it("returns bot-friendly matches with maps URLs", () => {
    const results = lookupForBot("konsolosluk", { city: "Dubai" });

    expect(results.length).toBeGreaterThan(0);
    expect(results[0].mapsUrl).toContain("https://www.google.com/maps/search/");
  });
});
