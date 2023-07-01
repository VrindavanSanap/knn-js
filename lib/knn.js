

var knnjs = (function(exports) {

  /*

  */
  var KNN = function(options) {
  }

  KNN.prototype = {

    train: function(data, labels, K, dist, ss, size) {
      let grid = []
      for (let x = 0.0; x <= WIDTH; x += density) {
        temp = []
        for (let y = 0.0; y <= HEIGHT; y += density) {
          let least_l1_dist = 1000000
          let least_l1_dist_label = 0
          for (let k = 0; k < data.length; k += 1) {
            const data_x = data[k][0] * ss + WIDTH / 2
            const data_y = data[k][1] * ss + WIDTH / 2
            const l1_dis_k = get_l2_dist(data_x, data_y, x, y)
            if (l1_dis_k < least_l1_dist) {
              least_l1_dist = l1_dis_k
              least_l1_dist_label = labels[k]
            }
          }
          temp.push(least_l1_dist_label)
        }
        grid.push(temp)
      }

      return grid

    },

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
