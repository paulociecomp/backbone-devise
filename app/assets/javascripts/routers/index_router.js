BackDevise.Routers.Index = Backbone.Router.extend({
	routes: {
		"" : "index",
		"index" : "index",
		"signup" : "signup"
	},

	initialize: function(options){
		this.user = options.user;
	},

	index: function(){
		if(this.user.get("email")){
			var viewDashboard = new BackDevise.Views.Dashboard({user: this.user});
		}
		else{
			var viewLogin = new BackDevise.Views.UserLogin();
		}
	},

	signup: function(){
		var viewSignup = new BackDevise.Views.UserRegistration();
		$("#main").html(viewSignup.el);
	}
})