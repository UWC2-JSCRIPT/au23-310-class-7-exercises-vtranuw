describe("Blackjack Game", function () {
  describe("calcPoints", function () {
    it("should correctly calculate the score of a hand", function () {
      let hand = [
        { displayVal: "Ace", val: 1 },
        { displayVal: "King", val: 10 },
      ];
      let score = calcPoints(hand);
      expect(score.total).toBe(21);
      expect(score.isSoft).toBe(true);
    });
  });

  describe("Winner Determination", function () {
    it("Should declare  player as a winner if player score is higher", function () {
      let playerScore = 20;
      let dealerScore = 17;
      expect(determineWinner(playerScore, dealerScore)).toContain("You win!");
    });

    it("should declare dealer as winner if dealer score is higher", function () {
      let playerScore = 16;
      let dealerScore = 18;
      expect(determineWinner(playerScore, dealerScore)).toContain("You lose!");
    });

    it("should declare a tie if dealer and winner's scores are equal", function () {
      let playerScore = 17;
      let dealerScore = 17;
      expect(determineWinner(playerScore, dealerScore)).toContain("Tie!");
    });
  });


});
