require 'pry'
require 'json'

class EventsController < ApplicationController


  def index
    flickr_key = ENV["FLICKR_KEY"]
    results = HTTParty.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=#{flickr_key}&user_id=28634332%40N05&format=json&nojsoncallback=1&api_sig=ee55df500267effe322c1421baa32165",
    headers: {'Accept' => 'application/json' }, format: :json).parsed_response
    if results["photos"] == 0
      flash.now[:error] = "No results matched your search."
    else
      binding.pry

      return results
    end
  end
end

  # def flickr_url_generator
  #   uri =
  #
  # end
