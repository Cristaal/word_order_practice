var wordOrder = function(word) {
  var sentence = word.replace(/[0-9 ,.\-_]/g, ' ');
  var newSentence = sentence.toLowerCase();
  return newSentence;
};
