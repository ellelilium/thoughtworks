Feature: Available Seats Booking

Scenario: Verify Seats available message for a correct booking
    Given I access MarsAir page
    When I select correct departing and 2 years later returning dates
    Then I can see Seats available message