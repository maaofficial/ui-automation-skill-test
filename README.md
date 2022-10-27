### UI Automation Test
This repository contains scripts to execute UI Automation in website [https://www.service.nsw.gov.au/](https://www.service.nsw.gov.au/). This Automation using cypress and all code is written in Javascript.

API Automation Test File : cypress/e2e/uiautomation.cy.js

### Overview
There are three UI Automation Test in website [https://www.service.nsw.gov.au/](https://www.service.nsw.gov.au/).
1. First test is to website and Search for "Apply for a number plate" then Validate the navigation to appropriate page
2. Second test is Go To Find Locations Menu and Enter suburb "Sydney 2000" the Validate the service centre named as "Haymarket Service Centre"
3. Third test is same as the second test, but the different is Enter suburb "Sydney Domestic Airport 2020" the Validate the service centre named as "Rockdale Service Centre"

### Dependencies
- Cypress

### How to Installation and Run
1. Clone the repo
   ```sh
   git clone https://github.com/maaofficial/ui-automation-skill-test.git
   ```
3. go to project directory

4. Install Yarn Dependencies
   ```sh
   yarn add cypress --dev
   ```
5. To run this Automation Test write this command below in terminal
   ```sh
   yarn run cy:open
   ```
6. Select Chrome as web browser to E2E Testing
7. And Run file uiautomation.cy.js
