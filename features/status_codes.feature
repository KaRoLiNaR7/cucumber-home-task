@wip
@statusCodesTest
Feature: Status codes page

    Test status codes page

    Scenario Outline: User can check status code page <statusCode>
        Given I am on the "status_codes" page
        When I click on Status code <statusCode>
        Then I see the status code text with <statusCode>
        Examples:
            | statusCode |
            | 200        |
            | 301        |
            | 404        |
            | 500        |
