@wip
@keyPressTest
Feature: The Key Press Page

    Scenario: As A user, I can press any key and get a message with input.
        Given I am on the "key_presses?" page
        When I press <any> key.
        Then I should see a message saying "<message>"
        Examples:
            | any | message            |
            | T   | You entered: T     |
            | 1   | You entered: 1     |
            | ,   | You entered: COMMA |