FactoryGirl.define do
  factory :user do
    first_name "Fake"
    email "fake@email.com"
    password "password"
    password_confirmation "password"
  end
end
