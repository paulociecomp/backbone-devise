BackDevise.Views.Dashboard = Backbone.View.extend({
	template: JST["dashboard"],

	events: {
		"click #logout" : "logout"
	},

	initialize: function(options){
		this.user = options.user;
		this.render();
	},

	logout: function(e){
		e.preventDefault();

		var viewLogout = new BackDevise.Views.Logout();
		viewLogout.logout();
	},

	render: function(){
		console.log("dash")
		$(this.el).html(this.template({user: this.user}));
		$("#main").html(this.el);
	}
})