exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var binary = num.toString(2);
    var binaryLength = binary.length;
    return Number(binary.charAt(binaryLength - bit));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {
      var result = a * b
      return parseFloat(result.toPrecision(15));
    }
};
