require 'rails_helper'
require 'support/controller_macros'


RSpec.describe EventsController, type: :controller do
  include Devise::TestHelpers

   def setup
     @request.env["devise.mapping"] = Devise.mappings[:admin]
     sign_in FactoryGirl.create(:admin)
   end
 end

  describe "GET 'show'" do
    it "is successful" do
      get :show
      expect(response.status).to eq 200
    end
  end

  describe EventsController do
    login_admin

  it "should have a current_user" do
    # note the fact that you should remove the "validate_session" parameter if this was a scaffold-generated controller
    expect(subject.current_user).to_not eq(nil)
    end

  it "should get index" do
    get 'show'
    response.should be_success
  end
end
