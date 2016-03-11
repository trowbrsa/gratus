require 'rails_helper'
require 'support/controller_macros'

RSpec.describe GratitudesController, type: :controller do
  include Devise::TestHelpers
  login_user

  let(:create_params) do
  { user_id: 1,
    gratitude: {
      description: "Family",
    }
  }
  end

  let(:good_params) do
  { user_id: 1,
    gratitude: {
      description: "Family",
    }
  }
  end

  let(:gratitude) do
    Gratitude.create(good_params[:gratitude])
  end

  let(:bad_params) do
  {
    gratitude: {
      description: "",
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
    it "renders json" do
      post :create, create_params
      expect(response.header['Content-Type']).to include 'application/json'
    end

    it "renders errors when not saved to database" do
      post :create, bad_params
      expect(response.header['Content-Type']).to include 'application/json'
    end
  end

  describe "#allgrads" do
    it "displays gratitudes associated with user" do
      get :allgrads, good_params
      expect(response.status).to eq 200

    end
  end

  describe "DELETE 'destroy'" do
    it "redirects to index page" do
      delete :destroy, id: gratitude.id
      expect(response.status).to eq 204
    end
  end


end
