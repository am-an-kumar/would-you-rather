# Would You Rather

## Table of Contents

- [Instructions](#instructions) - [Demo](#demo) - [Setting Up Locally](#setting-up-locally) - [Features](#features)

- [Dependencies](#dependencies)
- [Known Bugs](#known-bugs)
- [Contributing](#contributing)

## Instructions

Would You Rather is an application that lets you create a poll, answer to existing polls and view the leaderboard.

### Demo

To see the demo, click [here](https://am-an-kumar.github.io/would-you-rather/)

### Setting Up Locally

Follow these steps to run the project locally

- clone this repo and install the dependencies
- start the frontend server by running - npm run dev or npm run dev:hot

### Features

- Login page has a dropdown of different users, select one to login.
- Navbar has links to home page, new poll page and leaderboard page.
- Home page has 3 tabs: - Answered - It shows the polls that you have answered. You can view the poll stats by clicking the card. - Unanswered - It shows the polls that you have not answered. You can go to the poll page by clicking the card. Once you submit your option, poll stats will be shown to you. - Asked - It shows the polls created by you. A user can't answer his/her own poll. But on clicking the poll card, the poll stats can be viewed. It is an extra feature i developed, cause it didn't make sense to allow a user to answer his/her own poll.
- New page contains form to create a new poll.
- Leaderboard page shows the leaderboard. Here users are ordered using sum of questions asked and answered. If this value is same for 2 users, the order in which data is received by fake api request is used.
- Notifications are shown on answering a poll or creating a new poll.

## Dependencies

This project mainly uses:

- react
- react-router
- redux

Check the package.json for the full list. You can take a look at the [boilerplate setup](https://github.com/am-an-kumar/react-boilerplate) that i used for this project.

## Known Bugs

- On opening the [demo link](https://am-an-kumar.github.io/would-you-rather/), the browser redirects to (https://am-an-kumar.github.io). Which is fine until you refresh the page. The issue is concerned with public path setting with github static pages. Everything works fine on localhost. For production, it is taking '/' as https://am-an-kumar.github.io/. I am working on fixing it.

## Contributing

Project is pretty much complete. Feel free to use it in what ever way you need. In case you can spot any other bug, please create a pull request. Follow the standard coding practices if you feel like creating a pull request.
