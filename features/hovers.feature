@wip
@hoverTest
Feature: The Hover Page

    Scenario Outline: As A user, I can hover any image and click to view profile.
        Given I am on the "hovers" page
        When I hover on <element>
        When Click on <link>
        Then I am on users page <user>.
        Examples:
            | element                                | link                                  | user |
            | '/html/body/div[2]/div/div/div[1]/img' | '//*[@id="content"]/div/div[1]/div/a' | 1    |
            | '/html/body/div[2]/div/div/div[2]/img' | '//*[@id="content"]/div/div[2]/div/a' | 2    |
            | '/html/body/div[2]/div/div/div[3]/img' | '//*[@id="content"]/div/div[3]/div/a' | 3    |
