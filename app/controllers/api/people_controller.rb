class Api::PeopleController < Api::BaseController
    respond_to :json
  
    include ApplicationHelper

    def people
        url = "https://api.salesloft.com/v2/people.json"
        res = http_get(url)
    
        respond_with(res.body)
    end
  end
  