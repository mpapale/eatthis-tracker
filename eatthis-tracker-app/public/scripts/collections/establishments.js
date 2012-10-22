define([
    'underscore',
    'backbone',
    'models/establishment'
], function(_, Backbone, EstablishmentModel) {
    var EstablishmentCollection = Backbone.Collection.extend({
        model: EstablishmentModel
    });

    return EstablishmentCollection;
});
