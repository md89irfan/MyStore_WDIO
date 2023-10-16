Feature: Register and login to My Store

@LoginAndPlaceOrder
Scenario: Login to Test Store and place order for a product
    Given I am on the login page
    When  I click on Login or Register link
    And   I enter loginId "<LoginName>" and password "<Password>"
    And   I click on Login button
    Then  I should see welcome back "<FirstName>" message
    When  I hover over product menu "<ProductMenu>"
    And   I click sub-product menu "<SubProductMenu>"
    When  I click on product "<ProductName>"
    And   I click on Add to Cart button
    And   I click on checkout button
    Then  I should see the product name as "<ProductName>"
    When  I click on Confirm Order
    Then  I should see order confirmation message

    Examples:
        | LoginName  | Password | FirstName | ProductMenu           | SubProductMenu | ProductName                        |
        | wdiotest03 | Pass123  | WDIO      | Apparel & accessories | T-shirts       | Casual 3/4 Sleeve Baseball T-Shirt |


