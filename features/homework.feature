#Feature: The Homework1 : Search with Naver
#
#  Background: The Browser should be opened
#    Given I open the Browser with url 'https://www.naver.com'
#
#  Scenario: Search with screen UI
#    When I search '감자튀김' in the input-box 'query'
#    Then This attribute 'div.api_txt_lines mark' should be same with '감자튀김'
#    Then The result of attribute 'div.api_txt_lines mark' is more then 10
#
#  #꼭 참고할 것! step-def에서 이미 getText를 사용하
#  # "감자튀김"이라는 텍스트 여부를 확인하였기 때문에
#  #시나리오 상에서는 Element 속의 mark 가 텍스트를 포함하였는가 로 설정할 수 있다.
#
