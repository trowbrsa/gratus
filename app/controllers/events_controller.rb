require 'pry'
require 'json'
require 'flickraw'

class EventsController < ApplicationController

  def show
    @params = params
    FlickRaw.api_key = ENV["FLICKR_KEY"]
    FlickRaw.shared_secret = ENV["FLICKR_SECRET"]
    list = flickr.interestingness.getList :per_page => 1, :page => params[:page]
    photo_detail = []
    list.each do |photo|
      flickr_hash = {}
      flickr_hash["url"] = FlickRaw.url(photo)
      flickr_hash["title"] = photo.title
      # flickr_hash["tags"] = flickr.photos.getInfo(photo["id"]).to_s.tags.map {|t| t.raw}
      photo_detail.push(flickr_hash)
    end

    @photo_detail = photo_detail

    respond_to do |format|
      format.html
      format.json { render :json => @photo_detail }
    end
  end
end



#     url = "25113616865"
#     info = flickr.photos.getInfo(:photo_id =>url.split("/").last)
#     binding.pry
#     FlickRaw.url_photostream(info)
#     @embed_photo={}
#     @embed_photo["flickr"]=FlickRaw.url(info) rescue FlickRaw.url_o(info) rescue FlickRaw.url_b(info)
#     @title = info.title
#     @square_url = FlickRaw.url_s(info)
#     @taken = info.dates.taken
#     @views = info.views
#     @tags = info.tags.map {|t| t.raw}
#   end
# end

  # def show
  #   # flickr_key = ENV["FLICKR_KEY"]
  #   results = HTTParty.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=fe961c0c733bd2d9b9f75e75c5d9fc23&user_id=28634332%40N05&format=json&nojsoncallback=1&api_sig=ee55df500267effe322c1421baa32165",
  #   headers: {'Accept' => 'application/json' }, format: :json).parsed_response
  #   if results["photos"] == 0
  #     flash.now[:error] = "No results matched your search."
  #   else
  #     @results = results
  #   end
  # end
# end
