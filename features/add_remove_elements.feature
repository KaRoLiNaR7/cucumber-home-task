@wip
@addRemoveTest
Feature: The Add-Remove Page
    Background:
        Given I am on the "add_remove_elements/" page

    Scenario: As a user, I can add several delete buttons and remove them.
        When I click on add button
        Then Delete button appear
        When I click on delete button
        Then Delete button disappear

