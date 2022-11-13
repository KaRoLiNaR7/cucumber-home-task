@wip
@checkboxTest
Feature: The Checkboxes Page

    Background: 
        Given I am on the "checkboxes" page

    Scenario: As A user, I can press any key and put check in checkbox.
        When I mark check on checkbox
        Then I have checkbox marked as checked    

    Scenario: As A user, I can press any key and put check in checkbox.
        When Checkbox already marked
        Then I have checkbox still marked as checked
       