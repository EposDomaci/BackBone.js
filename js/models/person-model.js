app = app || {};

app.model.Person = Backbone.Model.extend({
    defaults:{
        'ID:': '',
        'Ime:': '',
        'Prezime:': '',
        'Broj telefona:': '',
        'Adresa stanovanja:': '',
        'Email adresa:': '',
        'Roditelj:': ''
    },
    
    initialize: function(){
        var self = this;
        if(this.get('Roditelj:') != '0'){
            self.set('type','student');
        }else{
            self.set('type','roditelj');
        }
    }
});

app.collections.People = Backbone.Collection.extend({
    model: app.models.Person,

    comparator: function(person){
        return person.get('Prezime:');
    }
});