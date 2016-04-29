class MoviesController < ApplicationController

  before_action :get_image_properties

  def search
    @genre = params[:genre]
    @year = params[:year]
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
    unless @year.blank?
      query += "&release_date.gte=#{@year}-01-01"
      query += "&release_date.lte=#{@year.to_i + 5}-01-01"
    end
    unless @rating.blank?
      query += "&vote_average.gte=#{@rating}"
    end
    query
  end
end