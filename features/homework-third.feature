Feature: Search with selenium-automation practice


  Background: The Browser should be opened
    Given I open the Browser with url 'http://automationpractice.com'

  Scenario: Search with screen UI
  Then This attribute '#header_logo' should be shown
  When I click on the '.login' element
  Then This attribute '#SubmitCreate' should be shown
  When I click on the '#SubmitCreate' element
  When I wait element about 1000ms
  Then This attribute '//*[@id="create_account_error"]/ol/li/text()' should be with 'Invalid email address'
  Then The browser is closed
  #   When I search 'geldbörse klein' in the input-box '#twotabsearchtextbox'
  #   Then This attribute 'h2.a-size-mini span' should be shown with 'geld, börse, beutel'
  #   Then This attribute 'div.a-section #B07MY7Q5B3-best-seller' should be shown
  #  When I click on the 'div.a-section #B07MY7Q5B3-best-seller' element
  #  Then This attribute 'div._cDEzb_card-title_2sYgw h1.a-spacing-medium' should be shown
  #  Then The result of attribute 'div.p13n-gridRow .a-column' is more then 10
  #  Then The browser is closed

  #찾아보고 대략적인 구분이 체크
  # a, h1, h2, ol, il
  # mark, span, aria-label
  #원하는 문구를 찾기위한거라면 css로 찾는 것이 가능하나 (존재여부확인)
  #원하는 문구의 정확한 위치를 찾으려면 xpath가 필요하다
  #pending = 비동기적 처리
