Feature: The Homework1 : Search with Amazon

Background: The Browser should be opened
  Given I open the Browser with url 'https://www.amazon.de'

  Scenario : Search with screen UI
    When I search 'playmobil' on input field id with '#twotabsearchtextbox'
    Then This attribute 's-main-slot s-result-list s-search-results sg-row' should be shown
    When I click on th 's-main-slot s-result-list s-search-results sg-row' element
    Then This attribute 'a-row stores-row stores-widget-cf' should be shown
    And This attribute 'SearchInput__input__26kZQ' should be shown too
    When I search 'Pferde' on input field id with 'SearchInput__input__26kZQ'
    Then This attribute 's-result-item' should be shown

  #TODO - Homework : 세줄 이상의 시나리오를 작성하시오.
  # 추가된 StepDef
  # When I click on the '<any>' element
  # FYI 모든 엘레멘트는 css기반으로 엘레멘트 작성.




