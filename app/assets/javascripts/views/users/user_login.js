BackDevise.Views.UserLogin = Backbone.View.extend({
	template: JST["users/login"],

	events: {
		"submit #user_login" : "auth"
	},

	initialize: function(){
		this.user = new BackDevise.Models.User();
		this.render();
	},

	auth: function(e){
		e.preventDefault();
		var $form = $(e.target);
		var self = this;

		$.ajax({
			url: "/users/sign_in.json",
			data: $form.serialize(),
			dataType: "json",
			type: "post",
	    error: function(res){
				console.log(res);
	    },
			success: function(res){
				self.user.set(res);
				new BackDevise.Views.Dashboard({user: self.user});
			}
		})
	},

	render: function(){
		$(this.el).html(this.template());
		$("#main").html(this.el);
	}
})