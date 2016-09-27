const _ = require('Underscore');

var scores = [12, 54, 72, 90, 99, 32, 53, 96],
highScores =[], scoreLimit = 90;

highScores = _.select(scores, function(score){return score >= scoreLimit});

console.log(highScores);
