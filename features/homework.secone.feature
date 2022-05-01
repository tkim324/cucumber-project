#Feature: The Homework2 : Search with Amazon


#  Background: The Browser should be opened
#    Given I open the Browser with url 'https://www.amazon.de'

#  Scenario: Search with screen UI
#    When I search 'kleid damen' in the input-box '#twotabsearchtextbox'
#    Then This attribute '#p_n_size_two_browse-vebin-title' should be shown
#    When I click on the 'p_n_size_two_browse-vebin/14223270031' element
#    Then The elements '.s-search-results > div:nth-child(2) div.a-section > div.a-section> span div:nth-child(1) > span  a' contains 'aria-label' attribute with text value 'blau'
#    Then The browser is closed
    # a aria-label ?
#Then A text of attribute 'a[aria-label*="blau"]' should be same with 'blau'
