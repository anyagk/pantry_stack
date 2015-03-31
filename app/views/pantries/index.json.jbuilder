json.array!(@pantries) do |pantry|
  json.extract! pantry, :id, :quantity
  json.food_name pantry.food.name
  json.url pantry_url(pantry, format: :json)
end
