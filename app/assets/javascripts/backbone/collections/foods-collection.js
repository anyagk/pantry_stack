var FoodCollection = Backbone.Collection.extend({
  model: Food,
  url: '/foods',
  initialize: function(){
    this.fetch({
      async: false
    })
  },
  filterModels: function(keyword){
    return _.filter(this.models, function(food){return food.attributes.name.indexOf(keyword) >= 0 })
  }
})