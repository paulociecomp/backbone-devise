window.BackDevise = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(user) {
  	var user = new BackDevise.Models.User(user);
    new BackDevise.Routers.Index({user: user});
    Backbone.history.start({root: "/"});
  }
};
