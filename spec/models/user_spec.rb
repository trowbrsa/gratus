require 'rails_helper'

RSpec.describe User, type: :model do

  let(:bad_user_params) do
    User.create({
    })
  end

  let(:user_params) do
    User.create({
      email: "sdfs@sdf.com",
      password: "123",
      password_confirmation: "123"
    })
  end

  describe "model validations" do
    it "must have a first name" do
      expect(bad_user_params).to_not be_valid
      expect(bad_user_params.errors.keys).to include :first_name
    end

    it "must have an email" do
      expect(bad_user_params).to_not be_valid
      expect(bad_user_params.errors.keys).to include :email
    end

    it "must have a password confirmation that matches password" do
      passwords_not_matching = User.new({ email: "sdfs@sdf.com", password: "A1234578913", password_confirmation: "A123457891" })
      expect(passwords_not_matching.save).to eq false
      expect(passwords_not_matching.errors.keys).to include :password_confirmation
    end

    # it "must have a unique email" do
    #   user_params
    #   non_unique_email = User.new({first_name: "Bob", email: "sdfs@sdf.com", password: "A123457891", password_confirmation: "A123457891" })
    #   expect(non_unique_email.save).to eq false
    #   expect(non_unique_email.errors.keys).to include :email
    # end
  end
end
