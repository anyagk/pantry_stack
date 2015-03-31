var ShoppingItemView = Backbone.View.extend({
  tagName: 'li',
  initialize: function(){
    this.render();
  },

  render:function(){
    this.$el.html(this.template());
  },

  template: function(){
    return Handlebars.templates['shopping-list'](this.model.attributes);
  },

  events: {
    'click .bought': 'moveToFridgeList',
    'click .trash': 'deleteFood' 
  },

  moveToFridgeList: function(){
    var food = this.model;
    food.save({ quantity: 1 });
  },

  deleteFood: function(){
    var food = this.model;
    food.destroy();
  }
})  