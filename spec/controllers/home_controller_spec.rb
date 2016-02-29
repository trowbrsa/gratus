require 'rails_helper'
require 'support/controller_macros'


RSpec.describe HomeController, type: :controller do
  include Devise::TestHelpers
  login_user

  describe "GET 'index'" do
    it "is successful" do
      get :index
      expect(response.status).to eq 200
    end
  end
end
