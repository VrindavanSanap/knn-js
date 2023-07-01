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
  /*
  Train time 
    data = (train_size, feature_size)
    labels = (train_size)

  Inference Time 
    batch (test_size, feature_size)
      get distance matrix
      distance_matrix (test_size,feature_size)
      get argmax labels
      return labels (test_size)
  */
  var KNN = function(options) {
  }

  KNN.prototype = {
    train: function (data, labels, K, dist = "l1") {
      this.data = data
      return grid
    },
    get_distance_matrix: function (X) {
      /*
      returns tensor with shape(m, n) Where 
      tensor[i][j] is distance between ith X and jth train sample
      */
    }
      ,
    
    predict: function (grid) { 

    }

  }
  function get_l1_dis(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2)
  }
  function get_l2_dist(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
  }
  function randf(a, b) {
    return Math.random() * (b - a) + a;
  }
  function randi(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
  }

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
