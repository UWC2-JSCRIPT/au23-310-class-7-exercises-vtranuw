describe("Soccer Game points calculator", () => {
  describe("getPointsFromResult", () => {
    it("should return 3 points for a win", () => {
      expect(getPointsFromResult("w")).toEqual(3);
    });

    it("should return 1 point for a draw", () => {
      expect(getPointsFromResult("d")).toEqual(1);
    });

    it("should return 0 point for a loss", () => {
      expect(getPointsFromResult("l")).toEqual(0);
    });
  });

  describe("getTotalPoints", () => {
    it("should calculate total points from a string of results", () => {
      expect(getTotalPoints("wwdlww")).toEqual(13);
    });

    it("should return 0 if all results are losses", () => {
      expect(getTotalPoints("lllllll")).toEqual(0);
    });
  });

  describe("orderTeams", () => {
    it("should return a standings string for given team objects", () => {
      const teams = [
        { name: "Real Madrid", results: "wwwwdd" },
        { name: "Barcelona", results: "wwwld" },
      ];
      const expectedStandings = "Real Madrid: 14\nBarcelona: 10";
      expect(orderTeams(...teams)).toEqual(expectedStandings);
    });

    it("should handle a single team object", () => {
      const team = { name: "Real Madrid", results: "wwwwwww" };
      expect(orderTeams(team)).toEqual("Real Madrid: 21");
    });
  });
});
