BackDevise.Views.UserLogin = Backbone.View.extend({
	template: JST["users/login"],

	events: {
		"submit #user_login" : "auth"
	},

	initialize: function(){
		this.render();
	},

	auth: function(e){
		e.preventDefault();
		var $form = $(e.target);

		$.ajax({
			url: "/users/sign_in.json",
			data: $form.serialize(),
			dataType: "json",
			type: "post",
	    error: function(res){
				console.log(res);
	    },
			success: function(res){
				// _this.user.set(res);
			}
		})
	},

	render: function(){
		$(this.el).html(this.template());
	}
})