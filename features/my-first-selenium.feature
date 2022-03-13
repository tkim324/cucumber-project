Feature: The Selenium-Cucumber Test

Background: The Browser should be opened
  Given I open the Browser with url 'https://www.amazon.de'

  Scenario: This is the title of the "Scenario"
    When I search 'Playmobil' on input field id with '#twotabsearchtextbox'
    Then This attribute '.s-result-list .s-result-item' should be shown

  #TODO - Homework : 세줄 이상의 시나리오를 작성하시오.
  # 추가된 StepDef
  # When I click on the '<any>' element
  # FYI 모든 엘레멘트는 css기반으로 엘레멘트 작성.




