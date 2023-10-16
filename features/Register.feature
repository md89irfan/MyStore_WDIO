Feature: Register and login to My Store

  @RegisterUser
  Scenario Outline: As a user, I can register myself into Test Store web site   
    Given I am on the login page
    When  I click on Login or Register link
    And   I click on Continue button
    When  I enter "<fname>", "<lname>" and "<email>" details
    And   I enter "<company>", "<address1>", "<city>", "<state>", "<postcode>", "<country>"
    And   I enter "<loginId>" and "<password>"
    And   I select privacy policy checkbox
    And   I click on Continue button
    Then  I should see account successfully created message

    ### Update loginId and email before each execution to register a new loginId
    Examples:
      |email                        |loginId    | password |fname | lname  | company |address1      | city   | state  | postcode | country |
      |WDIOTypeScript06@mystore.com |wdiotest06 | Pass123  | WDIO | Test   | XYZ     |12 james lane | Delhi  | Delhi  | 110002   | India   |

