window.app = {
	collections: {},
	dispatcher: _.clone(Backbone.events),
	views: {},
	initialize: function(){
		app.views.carousel = new CarouselView({
			carousel: location.pathname+'template/carousel.html',
			block: location.pathname+'template/block.html'
		});
		app.router = new Router();
		Backbone.history.start();
	},
	error: function(){
		alert('Something went wrong!');
	}
};

$(function() {
  app.initialize();
});
