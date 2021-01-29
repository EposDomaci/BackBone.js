app = app || {};
app.models.Person = Backbone.Model.extend({
    defaults: {
        'ID': '',
        'Ime': '',
        'Prezime': '',
        'Broj telefona': '',
        'Adresa stanovanja': '',
        'Email adresa': '',
        'Roditelj': ''
    },

    inicijalizacija: function(){
        var self = this;
        if(this.get('Roditelj') !== ''){
            self.set('type','student');
        }else{
            self.set('type','parent');
        }
    }
});

app.collections.Person = Blackbone.Collection.extend({
    model: app.models.Person,

    comparator: function(person){
        return person.get('Prezime');
    }
});