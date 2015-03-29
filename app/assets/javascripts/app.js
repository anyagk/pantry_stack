$(function(){
  // to load the page:
  var foodRouter = new FoodRouter();
  // var pantryRouter = new PantryRouter();
  // var foodColl = new FoodCollection();
  // var pantryColl = new PantryCollection();
  

  Backbone.history.start();

  // foodColl.fetch({
  //   data: {testing: 'testing'},
  //   success: function(data){
  //     array = []
  //     $.each(data.models, function(index, value){
  //         array.push({name: value.attributes.name, id: value.attributes.id})
  //     })
  //     console.log(array)
  //   },
  //   error: function(data){
  //     console.log(data)
  //   }
  // });

  // $('#food-search').on('keydown', function(e){
  //   if(this.value.length > 2){
  //     var resultsColl = _.filter(foodColl.models, function(food){return food.attributes.name.indexOf(this.value) >= 0 })
  //     var resultsCollectionView = new FoodCollectionView({collection: resultsColl});
  //     resultsCollectionView.render();
  //   }
  // })
})