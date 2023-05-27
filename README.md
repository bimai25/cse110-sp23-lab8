# Lab 8 - Starter
**Question 1:** I would choose option 2 because the Recipe project is more of a personal project and it would be more efficient to check for bugs/do testing locally so that changes can be made faster. This Recipe project is not some sort of sub routine on a bigger project which would warrant testing via a GitHub Action. In other words there are not many pushes to GitHub overall so a GitHub Action seems unnecessary. Furthermore, we wouldn't want to run testing after development is finished because that can lead to headaches if a lot of test fails. We should constantly test to follow Agile.

**Question 2:** No

**Question 3:** I would not use a unit test to test the "messaging" feature because this process implies a user experience. This requires interaction with a webpage rather than testing an individual component. This seems more fit for an E2E test.

**Question 4:** I would use a unit test to test this feature because this is something that can be compartamentalized and be executed quickly. It is a logic check, not something that requires user interaction.