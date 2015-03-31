var PantryCollection = Backbone.Collection.extend({
  model: Pantry,
  url: '/pantries',
  initialize: function(){
    this.fetch({
      async: false
    })
  },
  needed: function(){
    var neededList = this.where({quantity: 0});
    return neededList;
  },
  notNeeded: function(){
    var notNeededList = this.where({quantity: 1});
    return notNeededList
  }
})

