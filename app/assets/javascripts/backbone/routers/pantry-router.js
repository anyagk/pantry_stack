var PantryRouter = Backbone.Router.extend ({
  initialize: function(){
    this.collection = new PantryCollection();
  },
  routes: {
    '': 'index'
  },
  index: function(){
    new PantryCollectionView({
      collection: this.collection,
      el: $('.foods-collection')
    })
  }
})