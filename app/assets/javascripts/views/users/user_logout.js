BackDevise.Views.Logout = Backbone.View.extend({

	initialize: function(options){
		// this.user = options.user;
	},

	logout: function(){
		var self = this;

		$.ajax({
			url: "/users/sign_out.json",
			type: "delete",
			dataType: "json",
			async: false,
			success: function(res){
				console.log("ola")
				var viewLogin = new BackDevise.Views.UserLogin();
			}
		})
	}
})