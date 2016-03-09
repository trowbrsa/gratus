source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.5.1'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# use bootstrap for styling
gem 'bootstrap-sass', '~> 3.3.6'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby
gem 'httparty'

gem 'd3-rails'

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

gem 'react-rails'
# for user authentication
gem 'devise'
gem 'omniauth'
gem 'omniauth-google'

gem 'flickraw'

# to pass data to JavaScript
gem 'gon'

gem 'aws-sdk' # S3 API
gem 'paperclip' # file attachment syntax and callbacks
gem 's3_direct_upload' # direct upload form helper and assets

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'rails-erd'
  gem 'rspec-rails', '~> 3.0'
  gem 'pry-rails'
  gem 'dotenv-rails'
  gem 'factory_girl_rails'
  gem 'simplecov'
  gem 'vcr'
  gem 'sqlite3'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :production do
  gem "pg"
end

group :test do
  gem 'webmock', '1.8.0'
end
