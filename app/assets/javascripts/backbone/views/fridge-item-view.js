var FridgeItemView = Backbone.View.extend({
  tagName: 'li',
  initialize: function(){
    this.render();
  },

  render:function(){
    this.$el.html(this.template());
  },

  template: function(){
    return Handlebars.templates['fridge-list'](this.model.attributes);
  },
  events: {
    'click .used': 'moveToShoppingList',
    'click .trash': 'deleteFood' 
  },
  moveToShoppingList: function(e){
    var food = this.model;
    food.save({quantity: 0});
    this.trigger('newPantry');
  },
  deleteFood: function(e){
    var food = this.model;
    food.destroy();
    this.trigger('newPantry');
  }
})  