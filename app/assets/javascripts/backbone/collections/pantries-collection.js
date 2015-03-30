var PantryCollection = Backbone.Collection.extend({
  model: Pantry,
  url: '/pantries',
  initialize: function(){
    this.fetch({
      async: false
    })
  },
  needed: function(){
    return this.models.where({quantity: 0});
  },
  notNeeded: function(){
    return this.models.where({quantity: 1});
  }
})

