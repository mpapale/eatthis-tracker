// defines view for listing establishments
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/establishments',
    'text!templates/establishment/list.html'
], function($, _, Backbone, EstablishmentsCollection, establishmentListTemplate) {
    var EstablishmentListView = Backbone.View.extend({
        el: $('#container'),
        initialize: function() {
            this.collection = new EstablishmentsCollection();
            this.collection.add({name: "Staple and Fancy"});
            var compiledTemplate = _.template(
                establishmentListTemplate, 
                {
                    establishments: this.collection.models
                }
            );
            this.$el.html(compiledTemplate);
        }
    });

    return EstablishmentListView;
});
