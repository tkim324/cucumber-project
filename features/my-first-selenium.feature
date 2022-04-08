Feature: The Homework1 : Search with Amazon

Background: The Browser should be opened


  Scenario : Search with screen UI
    Given I open the Browser with url 'https://www.amazon.de'
    When I search 'playmobil' in the input-box '#twotabsearchtextbox'
    Then This attribute '.a-section a-spacing-none._bGlmZ_logo_3eW0R' should be shown
    When I click on the '.a-section a-spacing-none._bGlmZ_logo_3eW0R' element
    Then This attribute '.Header__header__3bMN6 .Header__navArea__2dJRo' should be shown
    And This attribute '.SearchInput__input__26kZQ' should be shown
    When I search 'Pferde' in the input-box '.SearchInput__input__26kZQ'
    Then This attribute 'div.SearchHeaderDesktop__search-header__KC0QV p.Results__text__XMAi2' should be shown



  #Results__text__XMAi2 // 이게 표시가 되는지


  #  문장이 제대로 구현이 되는지확인하려면?
  #TODO - Homework : 세줄 이상의 시나리오를 작성하시오.
  # 추가된 StepDef
  # When I click on the '<any>' element
  # FYI 모든 엘레멘트는 css기반으로 엘레멘트 작성.

  #-s-mainslot.s-result-list s-search-results sg-row
