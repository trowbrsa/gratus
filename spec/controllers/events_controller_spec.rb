require 'rails_helper'

RSpec.describe EventsController, type: :controller do

  describe "GET 'show'" do
    it "is successful" do
      get :show
      expect(response.status).to eq 200
    end
  end

end
