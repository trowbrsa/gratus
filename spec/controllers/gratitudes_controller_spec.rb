require 'rails_helper'
require 'support/controller_macros'

RSpec.describe GratitudesController, type: :controller do
  include Devise::TestHelpers
  login_user

  let(:create_params) do
  {
    gratitude: {
      description: "Family",
    }
  }
end

  describe "GET 'index'" do
    it "is successful" do
      get :index
      expect(response.status).to eq 200
    end
  end

  describe "POST 'create'" do
    it "redirects to show page" do
      post :create, create_params
      expect(response.header['Content-Type']).to include 'application/json'
    end
  end


end
