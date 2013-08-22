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

$(function(){
	$(document).ajaxSend(function(e, xhr, options) {
		var token = $("meta[name='csrf-token']").attr("content");
		xhr.setRequestHeader("X-CSRF-Token", token);
	});
})
