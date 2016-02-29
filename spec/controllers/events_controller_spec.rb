require 'rails_helper'
require 'support/controller_macros'


RSpec.describe EventsController, type: :controller do
  include Devise::TestHelpers
  login_user

  # let! (:user) {FactoryGirl.create(:user)}

  describe "GET 'show'" do
    it "is successful" do
      get :show
      expect(response.status).to eq 200
    end
  end

  # it "should have a current_user" do
  #   # note the fact that you should remove the "validate_session" parameter if this was a scaffold-generated controller
  #   expect(subject.current_user).to_not eq(nil)
  # end

end
