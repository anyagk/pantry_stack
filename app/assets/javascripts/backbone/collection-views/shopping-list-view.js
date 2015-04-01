var ShoppingListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'shopping-list',

  initialize: function(){
    this.render();
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'destroy', this.render);
  },

  render: function (){
    this.$el.empty();
    this.collection.needed().forEach(function(model){
      var shoppingThing = new ShoppingItemView({model: model})
      this.$el.append(shoppingThing.$el)
    }.bind(this))
  }
})  