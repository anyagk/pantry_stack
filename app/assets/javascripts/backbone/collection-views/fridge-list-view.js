var FridgeListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'fridge-list',

  initialize: function(){
    this.render();
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'destroy', this.render);
  },

  render: function (){
    this.$el.empty();
    this.collection.notNeeded().forEach(function(model){
      var fridgeThing = new FridgeItemView({model: model})
      this.$el.append(fridgeThing.$el)
    }.bind(this))
  }
})  