describe("Soccer points calculator", () => {
  describe("getPointsFromResult", () => {
    it("should return 3 for a win", () => {
      expect(getPointsFromResult("w")).toEqual(3);
    });

    it("should return 1 for a draw", () => {
      expect(getPointsFromResult("d")).toEqual(1);
    });

    it("should return 0 for a loss", () => {
      expect(getPointsFromResult("l")).toEqual(0);
    });

    it("should return undefined for an invalid result", () => {
      expect(getPointsFromResult("x")).toBeUndefined();
    });
  });

  describe("getTotalPoints", () => {
    it("should calculate total points from a string of results", () => {
      expect(getTotalPoints("wwdlw")).toEqual(10);
    });

    it("should return 0 if all results are losses", () => {
      expect(getTotalPoints("lllll")).toEqual(0);
    });

    it("should handle an empty string by returning 0", () => {
      expect(getTotalPoints("")).toEqual(0);
    });
  });

  describe("orderTeams", () => {
    it("should return a standings string for given team objects", () => {
      const teams = [
        { name: "Sounders", results: "wwlwdd" },
        { name: "Galaxy", results: "lwlddd" },
      ];
      const expectedStandings = "Sounders: 11\nGalaxy: 6";
      expect(orderTeams(...teams)).toEqual(expectedStandings);
    });

    it("should handle a single team object", () => {
      const team = { name: "United", results: "wwwwww" };
      expect(orderTeams(team)).toEqual("United: 18");
    });
  });
});
