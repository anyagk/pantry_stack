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
    'click .add': 'addFood',
    'click .custom-food-submit': 'addCustomFood' 
  },

  addFood: function(e){
    var parentId = this.$el.closest('div').attr("id");

    var food = this.model;
    var quantity = (parentId = "fridge-search") ? 1 : 0;

    var pantry = pantryRouter.pantryCollection.create({ food_id: food.id, quantity: quantity });

    $('.food-search').val('');
    $('.search-results').empty();
  },

  addCustomFood: function(e){
    e.preventDefault();
    var food = new Food({name: $('.food-search').val().toLowerCase()})
    food.save({
      dataType: 'JSON',
      success: function(model, data){
        var id = model.id
        var parentId = this.$el.closest('div').attr("id");
        var quantity = (parentId = "fridge-search") ? 1 : 0;
        var pantry = new Pantry({ food_id: id, quantity: quantity });
        pantry.save();
        this.trigger('newPantry');
      }.bind(this)
    });
    $('.food-search').val('');
  }
})





