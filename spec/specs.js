describe('wordOrder', function() {
  it("will downcase all the words in a string", function() {
    expect(wordOrder("Hello World")).to.equal("hello world");
  });
});
