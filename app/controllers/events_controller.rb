def index
  flickr_access_token = ENV["FLICKR_KEY"]
  @results = HTTParty.get("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=fe961c0c733bd2d9b9f75e75c5d9fc23&gallery_id=6065-72157617483228192&format=rest&api_sig=630874d6e97abbd7e2dbacad4ee485b1",
   headers: {"Authorization" => "bearer #{flickr_access_token}", 'Accept' => 'application/json' }, format: :json).parsed_response
  return results
end
