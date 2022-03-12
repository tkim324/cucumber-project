Feature: The Selenium-Cucumber Test

Background: The Browser should be opened
  Given I open the Browser with url 'https://www.amazon.de'

  Scenario: This is the title of the "Scenario"
    When I search 'Playmobil'
    Then This attribute 'twotabsearchtextbox' should be shown


