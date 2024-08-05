Feature: Schedule is not Possible

Scenario: Verify schedule is not possible message for an incorrect booking
    Given I access MarsAir page
    When I select correct departing and less than 1 year returning dates
    Then I can see schedule is not possible message