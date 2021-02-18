class People < ApplicationRecord
  CHARS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  def self.countUniqueCharacters(email)
    result = {}

    # group all like-characters together
    groupedChars = email.chars.group_by { |char| char }

    # ensure the characters are valid letters
    groupedChars.keys.map do |key|
      if CHARS.include? key
        result[key] = groupedChars[key].count
      end
    end

    result.sort_by { |c| c.nil? ? 0 : -c[1] }
  end
end