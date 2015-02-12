describe('wordOrder', function() {
  it("downcases all the words in a string", function() {
    expect(wordOrder("Hello World")).to.equal("hello world");
  });
  it("ignores special characters like hyphens and colons", function() {
    expect(wordOrder("sugar-free")).to.equal("sugar free");
  });
});
