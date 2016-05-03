class MoviesController < ApplicationController

  before_action :get_image_properties

  def search
    @genre = params[:genre]
    @min_year = params[:minYear]
    @max_year = params[:maxYear]
    @rating = params[:rating]

    query = refine_search
    request = "#{Rails.configuration.TMDB_api_url}/discover/movie?api_key=#{Rails.configuration.TMDB_api_key}#{query}"
    response = HTTParty.get(request)
    if response.code == 200 && response["total_results"] > 0
      movie = response['results'].sample

      movie["poster_path"] = if @base_url.nil? || @size.nil?
        nil
      else
        "#{@base_url}/#{@size}#{movie["poster_path"]}"
      end
    else
      movie = {title: "Not found", poster_path: nil}
    end
    respond_to do |format|
      format.json {render json: movie}
    end
  end

  def get_image_properties
    request = "#{Rails.configuration.TMDB_configuration_url}?api_key=#{Rails.configuration.TMDB_api_key}"
    response = HTTParty.get(request)
    if response.code == 200
      @base_url = response["images"]["base_url"]
      @size = response["images"]["poster_sizes"].last
    end
  end

  def refine_search
    query = ''
    unless @genre == '0'
      query += "&with_genres=#{@genre}"
    end
    query += "&release_date.gte=#{@min_year}-01-01"
    query += "&release_date.lte=#{@max_year}-12-31"
    query += "&vote_average.gte=#{@rating}"
    query
  end
end