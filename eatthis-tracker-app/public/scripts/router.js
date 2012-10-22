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
            '': ''
        },

        '': function() {
            var establishmentListView = new EstablishmentListView();
            establishmentListView.render();
        }
    });

    var initialize = function() {
        var appRouter = new AppRouter();
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
