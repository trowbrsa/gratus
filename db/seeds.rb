# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:


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
