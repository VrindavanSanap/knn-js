

var knnjs = (function (exports) {

  /*
  Returns ---------->500  takes in data and numbers 
          |
          |  500x500 grid 
          |
          v
          500

  Takes in 
    Data 
    Lables
    K
    Shape of Grid
    Distance Type (L1 or L2)
  */
  var KNN = function (options) {
  }

  KNN.prototype = {
    train: function (data, labels, K, dist ="l1", grid_x = 500, grid_y = 500) {
     

      return grid

    },

  }
  function get_l1_dis(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2)
  }

  // Kernels
  // Misc utility functions
  // generate random floating point number between a and b
  function randf(a, b) {
    return Math.random() * (b - a) + a;
  }

  // generate random integer between a and b (b excluded)
  function randi(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
  }

  // create vector of zeros of length n
  function zeros(n) {
    var arr = new Array(n);
    for (var i = 0; i < n; i++) { arr[i] = 0; }
    return arr;
  }

  // export public members
  exports = exports || {};
  exports.KNN = KNN;
  exports.get_l1_dis = get_l1_dis;
  return exports;

})(typeof module != 'undefined' && module.exports);  // add exports to module.exports if in node.js
