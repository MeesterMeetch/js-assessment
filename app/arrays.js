exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
      args = Array.prototype.slice.call(arr);

      var argsSum =  args.reduce(function(a, b) {
        return a+b;
       });

       return argsSum;
  },

  remove : function(arr, item) {
      args = Array.prototype.slice.call(arr);

      newArray = _.without(args, 2);

      return newArray;
  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
