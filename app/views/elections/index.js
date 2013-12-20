var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'elections_index_view',

  events: { "click .list-group-item" : "toggleInfo"},

  toggleInfo: function(){
    console.log("toggled");
  }

});
module.exports.id = 'elections/index';
