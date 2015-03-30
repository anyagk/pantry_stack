var FoodCollectionView = Backbone.View.extend({
  initialize: function(){
    // this.render();
  },
  renderFridge: function(keyword){
    var $searchResults = this.$el.find('.search-results.fridge');
    $searchResults.empty();
    // var thisCollView = this;

    this.collection.filterModels(keyword).forEach(function(model){
      var newView = new FoodItemView({model: model});

      $searchResults.append(newView.$el);
    })

    // $('#search-list').append(this.$el('.search-list'));
  },
  renderShopping: function(keyword){
    var $searchResults = this.$el.find('.search-results.shopping');
    $searchResults.empty();
    // var thisCollView = this;

    this.collection.filterModels(keyword).forEach(function(model){
      var newView = new FoodItemView({model: model});

      $searchResults.append(newView.$el);
    })

    // $('#search-list').append(this.$el('.search-list'));
  },
  events: {
    'keyup .food-search': 'search'
  },

  search: function(e){
    var target = e.target;
    var inFridge = $(target).hasClass('fridge');
    var value = target.value;

    if (inFridge) {
      if (value.length >= 3){
        this.renderFridge(value);
      } else {
        this.$el.find('.search-results').empty();
      }
    } else {
      if (value.length >= 3){
        this.renderShopping(value);
      } else {
        this.$el.find('.search-results').empty();
      }
    } 
  }
});