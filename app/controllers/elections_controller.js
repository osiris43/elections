var _ = require('underscore');

module.exports = {
  index: function(params, callback) {
    var spec = {
      collection: {collection: 'Elections', params: params}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  }
};
