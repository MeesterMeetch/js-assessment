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

      newArray = _.without(args, item);

      return newArray;
  },

  removeWithoutCopy : function(arr, item) {
    var i, len;

    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
        len = len - 1;
      }
    }

    return arr;
  },

  append : function(arr, item) {

    arr.push(item);
    return arr;

  },

  truncate : function(arr) {

    arr.pop()
    return arr;

  },

  prepend : function(arr, item) {

    arr.unshift(item);
    return arr;

  },

  curtail : function(arr) {

    arr.shift();
    return arr;

  },

  concat : function(arr1, arr2) {

    return arr1.concat(arr2);

  },

  insert : function(arr, item, index) {

    arr.splice(index, 0, item);
    return arr;

  },

  count : function(arr, item) {

    var count = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {

    // var sorted_arr = arr.sort();
    //
    // var results = [];
    // for (var i = 0; i < arr.length + 1; i++) {
    //     if (sorted_arr[i + 1] === sorted_arr[i]) {
    //         results.push(sorted_arr[i]);
    //     }
    // }
    // return results;
    var results = [];
    for (var i = 0, len = arr.length - 1; i < len; i++) {
      if((results.indexOf(arr[i]) === -1) && (arr.indexOf(arr[i], i + 1) != -1)) {
          results.push(arr[i]);
       }
    }
    return results;

  },

  square : function(arr) {

    sqArr = [];

    for (var i = 0; i < arr.length; i++) {
      sqArr.push(arr[i] * arr[i]);
    }

    return sqArr;

  },

  findAllOccurrences : function(arr, target) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === target){
        newArr.push(i);
      }
    }
    return newArr;
  }
};
