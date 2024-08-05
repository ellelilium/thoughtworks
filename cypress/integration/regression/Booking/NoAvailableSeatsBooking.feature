Feature: No Available Seats Booking

Scenario: Verify Seats are not available message for a correct booking
    Given I access MarsAir page
    When I select correct departing and less than 2 years returning dates
    Then I can see Seats are not available message