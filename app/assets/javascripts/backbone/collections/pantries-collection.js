var PantryCollection = Backbone.Collection.extend({
  model: Pantry,
  url: '/pantries'
})