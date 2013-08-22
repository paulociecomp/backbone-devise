BackDevise.Routers.Index = Backbone.Router.extend({
	routes: {
		"" : "index",
		"/signup" : "signup"
	},

	initialize: function(){
		
	},

	index: function(){
		var viewLogin = new BackDevise.Views.UserLogin();
		$("#main").html(viewLogin.el);
	},

	signup: function(){
		alert("epa")
	}
})