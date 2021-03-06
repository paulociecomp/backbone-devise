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
		var el = $(this.el);

		el.find('input.btn-login').button('loading');

		$.ajax({
			url: "/users/sign_in.json",
			data: $form.serialize(),
			dataType: "json",
			type: "post",
	    error: function(response){
	    	el.find('input.btn-login').button('reset');
				var result = $.parseJSON(response.responseText);
				$(".alert-error").remove();
				$(".box-content").prepend("<div class='alert alert-error'>"+ result['error'] +"</div>")
	    },
			success: function(res){
				el.find('input.btn-login').button('reset');
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