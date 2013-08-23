require 'spec_helper'
Capybara.javascript_driver = :webkit

describe "user registration", js: true do
  context "signup is ok" do
    before do
    	visit "/"
    	click_link "Crie sua conta gratuitamente"

    	fill_in "user_email", with: "fulaninho@gmail.com"
    	fill_in "user_password", with: "123456"
    	fill_in "user_password_confirmation", with: "123456"

    	click_button "btn-save"
    end

    it "show user email" do
      expect(page).to have_content("fulaninho@gmail.com")
    end
  end

  context "when email has already been taken" do
  	let!(:user) { FactoryGirl.create(:user) }

    before do
    	visit "/"
    	click_link "Crie sua conta gratuitamente"

    	fill_in "user_email", with: "john@doe.com"
    	fill_in "user_password", with: "123456"
    	fill_in "user_password_confirmation", with: "123456"

    	click_button "btn-save"
    end

    it "display error message" do
    	expect(page).to have_content("has already been taken")
    end
  end

  context "when doesn't match Password" do
    before do
    	visit "/"
    	click_link "Crie sua conta gratuitamente"

    	fill_in "user_email", with: "john@doe.com"
    	fill_in "user_password", with: "123456"
    	fill_in "user_password_confirmation", with: "1234434356"

    	click_button "btn-save"
    end

    it "display error message" do
      expect(page).to have_content("doesn't match Password")
    end
  end
end