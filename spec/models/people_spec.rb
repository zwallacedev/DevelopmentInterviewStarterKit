require 'rails_helper'

RSpec.describe People, type: :model do
  fit "should return proper count" do
    expectedResult = [["a", 2], ["c", 3], ["e", 2], ["h", 2], ["i", 1], ["o", 1], ["t", 2], ["u", 1], ["z", 1]]

    result = People.countUniqueCharacters("zach@techucate.io")

    expect(result).to eq expectedResult;
  end

  fit "should not return count of symbols" do
    expectedResult = []

    result = People.countUniqueCharacters("@@@")

    expect(result).to eq expectedResult;
  end
end
