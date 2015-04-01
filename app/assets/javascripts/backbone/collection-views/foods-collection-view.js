var FoodCollectionView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderFridge);
    this.listenTo(this.collection, 'add', this.renderShopping);
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
    'keyup .food-search': 'search',
    'click .custom': 'createCustomFood' 
  },

  createCustomFood: function(e){
    var food = pantryRouter.foodCollection.create({
      name: $(e.target).parent().find('.food-search').val().toLowerCase(),
    }, {
      success: 
        function (){
          debugger;
          var quantity = (e.target.id == "fridge-custom") ? 1 : 0;
          var pantry = pantryRouter.pantryCollection.create({
           food_id: food.id, 
           quantity: quantity 
          });
          $('.food-search').val('');
        }
    });
  },

  // addCustomFood: function(e, food){
  //   debugger;
  //   // var id = $('.food-search').val()
  //   // var parentId = $(e.target).closest('div').attr("id");
  // },
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