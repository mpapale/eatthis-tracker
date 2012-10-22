// data definition for establishments
define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    var EstablishmentModel = Backbone.Model.extend({
        defaults: {
            name: "Elemental"
        }
    });

    return EstablishmentModel;
});
