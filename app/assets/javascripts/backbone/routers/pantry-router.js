var PantryRouter = Backbone.Router.extend ({
  initialize: function(){
    this.pantryCollection = new PantryCollection();
    this.foodCollection = new FoodCollection();
  },
  routes: {
    '': 'index'
  },
  index: function(){
    new FoodCollectionView({
      collection: this.foodCollection,
      el: $('.foods-collection')
    }),
    new FridgeListView({
      collection: this.pantryCollection,
      el: $('.fridge-list')
    }),
    new ShoppingListView({
      collection: this.pantryCollection,
      el: $('.shopping-list')
    })
  }
})