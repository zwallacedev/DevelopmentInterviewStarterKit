class Api::PeopleController < Api::BaseController
    respond_to :json
  
    include ApplicationHelper

    def list
        url = "https://api.salesloft.com/v2/people.json"
        res = http_get(url)

        people = JSON.parse(res.body)["data"].each do |person|
            person["sortedCharacters"] = People.countUniqueCharacters person["email_address"]

            person
        end

        respond_with(people)
    end
  end
  