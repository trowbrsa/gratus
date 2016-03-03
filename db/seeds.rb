# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

  seed_users = [
    {first_name: "Charlie", last_name: "Smellson", email: "charlie@gmail.com", password: 'topsecret', password_confirmation: 'topsecret'},
    {first_name: "Pope", last_name: "Francis", email: "pope@pope.com", password: 'topsecret', password_confirmation: 'topsecret'}
  ]

  seed_users.each do |user|
    User.create user
  end

  seed_gratitudes = [
    {user_id: 1, description: "Happy for many things!"},
    {user_id: 1, description: "Pizza!"},
    {user_id: 1, description: "The park"},
    {user_id: 2, description: "World peace"},
    {user_id: 2, description: "Juice!"},
    {user_id: 3, description: "Family!"},
    {user_id: 3, description: "Sunshine"}
  ]

  seed_gratitudes.each do |grad|
    Gratitude.create grad
  end




# seed_merchants = [
#   {username: "kdefliese", email: "kdefliese@gmail.com", password: "cats", password_confirmation: "cats"},
#   {username: "seabay", email: "seabay@seabay.com", password: "seabay", password_confirmation: "seabay"}
# ]
#
# seed_merchants.each do |mer|
#   Merchant.create mer
# end

# seed_products = [
#   {name: "Sea Anemone", price: 5.00, photo_url: "http://www.cabrillomarineaquarium.org/_photos/species-green-sea-anemone.jpg", description: "Is it fluffy, or slimy?", quantity: 5, merchant_id: 1},
#   {name: "Starfish", price: 5.00, photo_url: "http://www.buckeyescuba.com/wp-content/uploads/2012/04/starfish2.jpg", description: "", quantity: 5, merchant_id: 2},
#   {name: "Dolphin", price: 5.00, photo_url: "http://weknowyourdreams.com/images/dolphin/dolphin-01.jpg", description: "", quantity: 0, merchant_id: 2},
#   {name: "Shark Hat", price: 5.00, photo_url: "http://img.costumecraze.com/images/vendors/rasta/3690-Sharknado-Man-Eating-Shark-Costume-Hat-large.jpg", description: "THIS IS AMAZING", quantity: 5, merchant_id: 2},
#   {name: "PAWS", price: 5.00, photo_url: "http://www.tshirtvortex.net/wp-content/uploads/PAWS.jpg", description: "Cats are scarier than sharks anyways, let's be real.", quantity: 5, merchant_id: 2},
#   {name: "Finding Nemo Sweatshirt", price: 5.00, photo_url: "http://g02.a.alicdn.com/kf/HTB1o5_5JFXXXXXsXXXXq6xXFXXXB/Finding-Nemo-Crewneck-Sweatshirt-Dory-and-Marlin-Cartoon-Jumper-Women-Men-Fashion-Clothing-Jogging-Sport-Tops.jpg", description: "Neeeeeemo", quantity: 5, merchant_id: 2},
#   {name: "Clownfish Costume", price: 5.00, photo_url: "http://images.halloweencostume.com/products/9676/1-1/newborn-clown-fish-costume.jpg", description: "Squee", quantity: 5, merchant_id: 2}
# ]
#
# seed_products.each do |pro|
#   Product.create pro
# end
