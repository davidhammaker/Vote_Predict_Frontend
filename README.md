# Vote Predict (Frontend)

A web-app in which you pick one of two answers to the given question, then try to guess what other users have picked.

## Getting Started

### Prerequisite

Follow the instructions in the README for the [Vote Predict Backend](https://github.com/davidhammaker/Vote_Predict_Backend) to provision your frontend.

### Set Up

1. Make sure you have a supported version of [Node](nodejs.org) installed.
 * This is installed to make `npm` available.
 * The most recent LTS version is recommended.


2. Clone the repository.
 * Either clone directly, or create a fork first.


3. Within the repository, run `$ npm install` to install all required packages.


4. Create an environment variable called "`REACT_APP_BACKEND`" to hold the URL of your backend server.
 * For local development, you can probably set this equal to `http://localhost:8000/`.
 * Example: `export REACT_APP_BACKEND="http://localhost:8000/"`.
  * You may find it helpful to follow a tutorial for setting up environment variables on [Windows](https://www.youtube.com/watch?v=IolxqkL7cD8) or [Mac / Linux / Bash for Windows](https://www.youtube.com/watch?v=5iWhQWVXosU).


5. Run `$ npm start` to start up the frontend server locally, then navigate to `localhost:3000` in your browser.

### More about this React App

This app was first created with `create-react-app`, which generated a separate file with a few other tips and instructions, found [here](./REACTQUICKSTART.md).
