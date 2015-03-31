json.array!(@foods) do |food|
  json.extract! food, :id, :name
  json.url food_url(food, format: :json)
  json.f
end
