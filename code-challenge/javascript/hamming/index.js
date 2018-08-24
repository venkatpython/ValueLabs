// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

class Hamming{
    compute(str1, str2){
        var string1 = [],
        string2 = [],
        diff = 0
        x;

    string1 = str1.split("");
    string2 = str2.split("");
    console.log(string1)
    console.log(string2)
    if(str1.length != str2.length)
    {
        throw "DNA strands must be of equal length."
    }
    else
    {
        for(var x = 0; x < str1.length; x++)
        {
           if(string1[x] != string2[x])
           {
              diff++
           }
        }
    }
    return diff
    }
}

module.exports = Hamming;