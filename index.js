module.exports = function() {
  return Object.assign({}, ...Array.prototype.slice.call(arguments));
};