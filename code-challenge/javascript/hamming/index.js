// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

class Hamming{
    compute(dna1, dna2){
        var hamming_distance = 0
        x;

    var _dna1 = dna1.split("");
    var _dna2 = dna2.split("");
    if(_dna1.length != _dna2.length)
    {
        throw "DNA strands must be of equal length."
    }
    else
    {
        for(var x = 0; x < dna1.length; x++)
        {
           if(_dna1[x] != _dna2[x])
           {
              hamming_distance++
           }
        }
    }
    return hamming_distance
    }
}

module.exports = Hamming;
