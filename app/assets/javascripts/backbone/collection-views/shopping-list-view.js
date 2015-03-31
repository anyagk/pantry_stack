var ShoppingListView = Backbone.View.extend({
  initialize: function(){
    this.$el.empty();
    this.render();
    this.collection.on('addFood', this.render.bind(this));
    this.collection.on('addCustomFood', this.render.bind(this));
  },

  render: function (){
    this.collection.needed().forEach(function(model){
      var shoppingThing = new ShoppingItemView({model: model})
      shoppingThing.on('newPantry', this.render.bind(this))
      this.$el.append(shoppingThing.$el)
    }.bind(this))
  },
  events: {
    'click .add': 'addFood',
  },
  addFood: function(){
    this.render();
  }
})