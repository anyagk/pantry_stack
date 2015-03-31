var FridgeListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'fridge-list',

  initialize: function(){
    this.$el.empty();
    this.render();
    this.collection.on('addFood', this.render.bind(this));
    this.collection.on('addCustomFood', this.render.bind(this));
  },

  render: function (){
    this.collection.notNeeded().forEach(function(model){
      var fridgeThing = new FridgeItemView({model: model})
      fridgeThing.on('newPantry', this.render.bind(this))
      this.$el.append(fridgeThing.$el)
    }.bind(this))
  },
  events: {
    'click .add': 'addFood',
  },
  addFood: function(){
    this.render();
  }
})  