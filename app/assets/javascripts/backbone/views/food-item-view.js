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
    'click .add': 'addFoodToPantry'
  },
  addFoodToPantry: function(e){
    debugger;
  }
})