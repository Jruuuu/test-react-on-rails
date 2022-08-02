class Api::V1::BannerController < ApplicationController
  def index
    all_BannerMessage = BannerMessage.all
    render json: all_BannerMessage
  end

  def create
    bannerMessage = BannerMessage.create(post_params)
    render json: bannerMessage
  end

  def show
    bannerMessage = BannerMessage.find(params[:id])
    render json: bannerMessage
  end

  def update
    bannerMessage = BannerMessage.find(params[:id])
    bannerMessage.update(post_params)
    render json: bannerMessage
  end

  def destroy
    BannerMessage.destroy(params[:id])
    head :ok
  end

  private

  def post_params
    params.permit(:title, :description, :is_published)
  end
end