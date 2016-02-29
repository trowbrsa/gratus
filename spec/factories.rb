FactoryGirl.define do
  factory :user do
    email "fake@email.com"
    password "password"
    password_confirmation "password"
    # confirmed_at Date.today
  end
end
