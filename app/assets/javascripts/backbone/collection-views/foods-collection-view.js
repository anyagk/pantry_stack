var FoodCollectionView = Backbone.View.extend({
  initialize: function(){
    // this.render();
  },
  render: function(keyword){
    var $searchResults = this.$el.find('.search-results');
    $searchResults.empty();
    // var thisCollView = this;

    this.collection.filterModels(keyword).forEach(function(model){
      var newView = new FoodItemView({model: model});

      $searchResults.append(newView.$el);
    })

    // $('#search-list').append(this.$el('.search-list'));
  },
  events: {
    'keyup #food-search': 'search'
  },
  search: function(e){
    var value = e.target.value

    if (value.length >= 3){
      this.render(value);
    } else {
      this.$el.find('.search-results').empty();
    }
  }
});