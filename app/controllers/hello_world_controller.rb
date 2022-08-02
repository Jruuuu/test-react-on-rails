# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @post = {Post: Post.all}
    @hello_world_props = { name: "Stranger" }
    @banner = {BannerMessage: BannerMessage.all} 
  end
end
