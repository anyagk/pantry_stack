var FoodItemView = Backbone.View.extend({
  tagName: 'li',
  initialize: function(){
    this.render();
  },

  render:function(){
    this.$el.html(this.template());
  },

  template: function(){
    return Handlebars.templates['search-results'](this.model.attributes);
  },

  events: {
    'click .add': 'addFood'
  },

  addFood: function(e){
    var parentId = this.$el.closest('div').attr("id");

    var food = this.model;
    var quantity = (parentId == "fridge-search") ? 1 : 0;

    var pantry = pantryRouter.pantryCollection.create({ food_id: food.id, quantity: quantity });

    $('.food-search').val('');
    $('.search-results').empty();
  }
})





