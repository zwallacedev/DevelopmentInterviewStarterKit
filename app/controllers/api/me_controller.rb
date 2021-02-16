class Api::MeController < Api::BaseController
  respond_to :json

  include ApplicationHelper

  def me
    # I need to call the api with /v2/me.json. To get my user.
    # How should I call this?
    url = "https://api.salesloft.com/v2/me.json"
    res = http_get(url)

    respond_with(res.body)
  end
end
