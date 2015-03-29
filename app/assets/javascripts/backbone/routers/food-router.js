var FoodRouter = Backbone.Router.extend ({
  initialize: function(){
    this.collection = new FoodCollection();
  },
  routes: {
    '': 'index'
  },
  index: function(){
    new FoodCollectionView({
      collection: this.collection,
      el: $('.foods-collection')
    })
  }
})