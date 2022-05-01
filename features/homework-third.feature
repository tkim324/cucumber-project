Feature: The Homework3rd : Search with Amazon


  Background: The Browser should be opened
    Given I open the Browser with url 'https://www.amazon.de'

  Scenario: Search with screen UI
    When I search 'geldbörse klein' in the input-box '#twotabsearchtextbox'
    Then This attribute 'div.a-section #B07MY7Q5B3-best-seller' should be shown
    When I click on the 'div.a-section #B07MY7Q5B3-best-seller' element
    Then This attribute 'div._cDEzb_card-title_2sYgw h1.a-spacing-medium' should be shown
    Then The result of attribute 'div.p13n-gridRow .a-column' is more then 10
    Then The browser is closed

  #찾아보고 대략적인 구분이 체크
  # a, h1, h2
  # mark, span, aria-label

