function get_dist_tensor(X, data) {
  const num_test = X.shape[0]
  const num_train = data.shape[0]
  let sx = tf.sum(tf.square(X), axis = 1, keepdims = true)
  let sy = tf.sum(tf.square(data), axis = 1, keepdims = true)
  sx = tf.broadcastTo(sx, [num_test, num_train])
  sy = tf.broadcastTo(tf.transpose(sy), [num_test, num_train])
  s1 = tf.matMul(X, tf.transpose(data)).mul(-2)
  sx_sy = tf.add(sx, sy)
  const dists = tf.sqrt(tf.add(s1, sx_sy))
  return dists
}


function get_predictions(data, labels, k, grid) {
  data_tensor = tf.tensor2d(data)
  labels_tensor = tf.tensor2d(labels)
  grid_tensor = tf.tensor3d(grid).reshape([-1, 2])
  const dists_tensor = tf.tidy(() => get_dist_tensor(grid_tensor, data_tensor))
  let preds_tensor = tf.ones(shape = [126, 126])
  preds = preds_tensor.arraySync()
  return preds
}