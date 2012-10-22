// router file
// sets up some routes
// allows initialization of those routes and backbone history

define([
    'jquery',
    'underscore',
    'backbone',
    'views/establishments/list'
], function($, _, Backbone, EstablishmentListView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '/': 'showEstablishments',
            '*actions': 'defaultAction' 
        }
    });

    var initialize = function() {
        var appRouter = new AppRouter();
        appRouter.on('showEstablishments', function() {
            var establishmentListView = new EstablishmentListView();
            establishmentListView.render();
        });
        appRouter.on('defaultAction', function(actions) {
            console.log('No route:', actions);
        });
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
