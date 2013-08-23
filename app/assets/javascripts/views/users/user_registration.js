BackDevise.Views.UserRegistration = Backbone.View.extend({
	template: JST["users/signup"],

	events: {
		"submit #user_registration" : "signup"
	},

	initialize: function(){
		this.user = new BackDevise.Models.User();
		this.render();
	},

	signup: function(e){
		e.preventDefault();
		var $form = $(e.target);
		var self = this;
		var el = $(this.el);

		el.find('input#btn-save').button('loading');

		$.ajax({
			url: "/users.json",
			data: $form.serialize(),
			dataType: "json",
			type: "post",
	    error: function(response){
	    	el.find('input#btn-save').button('reset');
	    	var result = $.parseJSON(response.responseText);

				_(result.errors).each(function(errors,field) {
					var $controlGroup = $('.user_'+field);

          $('.user_'+field).addClass('error');
          _(errors).each(function(error, i) {
          	$controlGroup.children(".controls").find("span.help-inline").remove();
            $controlGroup.children(".controls").append('<span class="help-inline">'+ error +'</span>');
          });
        });
	    },
			success: function(res){
				el.find('input#btn-save').button('reset');
				self.user.set(res);
				window.location = "/";
			}
		})
	},

	render: function(){
		$(this.el).html(this.template());
	}
})