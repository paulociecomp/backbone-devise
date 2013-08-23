require 'spec_helper'
Capybara.javascript_driver = :webkit

describe "user login", js: true do

  context "login is success" do
  	let!(:user) { FactoryGirl.create(:user, email: 'fulano@gmail.com') }

    before do
    	visit "/"

    	fill_in "user_email", with: "fulano@gmail.com"
    	fill_in "user_password", with: "123456"

    	click_button "Efetuar login"
    end

    it "display user email" do
    	expect(page).to have_content("Olá");
    end
  end

  context "login fail" do
    before do
    	visit "/"

    	fill_in "user_email", with: "john@doe.com"
    	fill_in "user_password", with: "dasdas"

    	click_button "Efetuar login"
    end

    it "display error message" do
    	expect(page).to have_content("Invalid email or password.")
    end
  end
end