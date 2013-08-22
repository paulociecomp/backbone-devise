window.BackDevise = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new BackDevise.Routers.Index();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  BackDevise.initialize();
});
