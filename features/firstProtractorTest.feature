Feature: firstProtractorTest


  Scenario: Subtraction
    Given I open "https://juliemr.github.io/protractor-demo/"
    When I want to do "5" "-" "2"
    Then result of operation should equal "3"

  Scenario: newAdditionTest
    Given I open "https://juliemr.github.io/protractor-demo/"
    When I want to do "1" "+" "4"
    Then result of operation should equal "5"
