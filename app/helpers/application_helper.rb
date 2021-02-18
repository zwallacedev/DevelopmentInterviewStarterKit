require 'net/http'

module ApplicationHelper
    def http_get(url)
        apiKey = "Bearer #{ENV["SALESLOFT_APPLICATION_SECRET"]}"

        uri = URI(url)
        req = Net::HTTP::Get.new(uri)
    
        req["Authorization"] = apiKey
        req["Content-Type"] = "application/json"
        
        res = Net::HTTP.start(uri.hostname, uri.port, :use_ssl => uri.scheme == 'https') {|http|
          http.request(req)
        }
        
        res
    end
end
