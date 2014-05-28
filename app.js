window.app = {
	collections: {},
	dispatcher: _.clone(Backbone.events),
	models: {},
	views: {},
	initialize: function(){
		app.router = new AppRouter();
		Backbone.history.start({ pushState: true });
	}
};

$(function() {
  app.initialize();
});
