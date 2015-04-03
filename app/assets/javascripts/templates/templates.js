(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['fridge-list'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<li><p class='food-list'>"
    + this.escapeExpression(((helper = (helper = helpers.food_name || (depth0 != null ? depth0.food_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"food_name","hash":{},"data":data}) : helper)))
    + " </p><button class='used form-button list-button'>Add to shopping list</button><button class='trash form-button list-button'>Delete</button></li> ";
},"useData":true});
templates['search-results'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<li>"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " <button class='add form-button'>Add this item</button></li> ";
},"useData":true});
templates['shopping-list'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<li><p class='food-list'>"
    + this.escapeExpression(((helper = (helper = helpers.food_name || (depth0 != null ? depth0.food_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"food_name","hash":{},"data":data}) : helper)))
    + "</p> <button class='bought form-button list-button'>Add to fridge</button><button class='trash form-button list-button'>Delete</button></li> ";
},"useData":true});
})();