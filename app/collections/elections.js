var Election = require('../models/election')
  , Base = require('./base');

module.exports = Base.extend({
  model: Election,
  url: '/elections?key=AIzaSyAhJ8IQ1Tot3JR2RR6yt7fqWY-a8DJlnR0',

  parse: function(response, options){
    return response['elections'];
  }
});
module.exports.id = 'Elections';

