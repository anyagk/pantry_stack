# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Food.delete_all
a = File.open("db/list_of_foods.txt").readlines.map(&:chomp).map(&:downcase)

a.each do |food|
  Food.find_or_create_by(name: food)
end