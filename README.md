# Frontend tech test of Westpac NZ - 2021-02-18

Author: Xingbin Gao

## Tech test timesheet

- Test is started at 10:45am 2021-02-18;
- Test is paused at 12:15pm 2021-02-18;
- Test is restarted at 10:05am 2021-02-21;
- Test is completed at 2021-02-18;
- Total time spent on the test: hours;

## Notes

The foundamental folder and file structure of this test reposotiry is based on [react redux-saga template](https://github.com/benxgao/react-redux-saga-plate), and tools/packages that are adpoted in this repository basically include:
React.js, Redux-saga.js, Webpack.js, and Styled-components, etc.

## Coding scope

The tech test code aims to demostrate my frontend tech skills, and try to get a web application up and running in development environment, consuming faked data from API mock server. 

It may not contain day-to-day work best practice, but potentially it could:
- get pixel-perfect design from design artifects;
- implement responsive web design to fix multiple screen sizes;
- integrate with CI/CD tool for pull request pipeline basically includes linting and unit testing steps;
- Set up docker environment and compose docker services like app service, mock api service and test service together for fast local checking and testing, and potentially integrate with CI/CD tool via shell scripts; More demostrated code could be found [here (work in progress)](https://github.com/benxgao/docker-api-plate);
- set up e2e test environment adopting tools like Cypress, which could be integrated with CI/CD pipelines;

## Coding plan

- [x] Get React web application up and running in dev environment;
- [ ] Get mock API server up and running;
- [ ] Get the web app consume mocked API responses via Redux side efforts (Redux-saga.js applied);
- [ ] Get web components consume data from Redux states, and get data display in web pages;
- [ ] Leave notes and potential further solution for future development;
- [ ] Invit code reviewers and complete test;
