# Frontend tech test of Westpac NZ - 2021-02-18

Author: Xingbin Gao

## Tech test timesheet

- Test is started at 10:45am 2021-02-18;
- Test is completed at 2021-02-18;
- Total time spent on the test: hours;

## Notes

This test reposotiry foundamental file structure is based on [react redux-saga template](https://github.com/benxgao/react-redux-saga-plate), tools adpoted in this repository basically include:
React.js, Redux-saga.js, Webpack.js, and Styled-components, etc.

## Coding scope

As time is limited, this tech test aims to get a web application up and running in development environment, consuming faked data from API mock server. It may not contains a day-to-day work best practice, but potentially it could:
- Get pixel-perfect design from design artifects;
- Implement responsive web design to fix multiple screen sizes;
- Integrate with CI/CD tool for pull request pipeline basically includes linting and unit testing steps;
- Set up docker environment and compose docker services like app service, mock api service and test service together for fast local checking and testing, and potentially integrate with CI/CD tool via shell scripts;
- Set up e2e test environment adopting tools like Cypress, and integrate with CI/CD pipeline;

## Coding plan

- [ ] Get React web application up and running in dev environment;
- [ ] Get mock API server up and running;
- [ ] Get the web app consume mocked API responses via Redux side efforts (Redux-saga.js applied);
- [ ] Get web components consume data from Redux states, and get data display in web pages;
- [ ] Leave notes and potential further solution for future development;
- [ ] Invit code reviewers and complete test;
