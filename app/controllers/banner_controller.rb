# frozen_string_literal: true

class BannerController < ApplicationController
  layout "hello_world"

  def index
    @post = [Post: Post.all]
    @hello_world_props = { name: "Stranger" }
  end
end
