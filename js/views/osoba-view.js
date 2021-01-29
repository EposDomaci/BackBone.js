app = app || {};

app.views.Person = Blackbone.View.extend({
    tagName: 'li',

   atributi: function(){
        return{
            class: 'person'+this.model.get('type')
        };
    },

    template: _.template($('#person-template').html()),

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

app.views.People = Backbone.View.extend({

    el: '#wrapper',

    initialize: function(data){
        this.collection = new app.collections.People(data);
        this.render();
    },

    render:function(){
        var self = this;
        $('#listing').empty();
        _.each(this.collection.models,function(person){
            self.renderPerson(person);
        },this);
    },

    renderPerson: function(person){
        var newperson = new app.views.Person({
            model: person
        });
        $('#listing').append(newperson.render().el);
    }
});