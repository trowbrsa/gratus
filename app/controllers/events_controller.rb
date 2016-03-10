require 'pry'
require 'json'
require 'flickraw'

class EventsController < ApplicationController

  def show
    FlickRaw.api_key = ENV["FLICKR_KEY"]
    FlickRaw.shared_secret = ENV["FLICKR_SECRET"]
    list = flickr.interestingness.getList :per_page => 3, :page => params[:page]
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
