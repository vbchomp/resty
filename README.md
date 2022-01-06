# resty

// TODO: Lab 29  
// TODO: Lab 28  
// TODO: Lab 27  
// Component didmount and write a console.log or something in the component.  
// Testing for the proof of life. Check out react testing library snapshot.  
// Get solution code for 26 and then starter code for 27.

## RESTy Phase 4

In phase 4, we will be tracking every API call and storing it in history

The following user stories detail the major functionality for this phase of the project.

- As a user, I want to see a list of my previous API calls, so that I can see the results again, quickly
- Application Flow:

  - User enters an API URL
  - Chooses a REST Method
  - Clicks the “Go” button
  - Application fetches data from the URL given, with the method specified
  - Application stores the API request and returned data into state
    - Updates the list of previous API calls
  - Application Displays the response headers and results separately
    - Both headers and results should be “pretty printed” JSON

Refactor state management within the App component to use the ```useReducer``` hook.

Replace any component state managements to use derived state from ```useReducer``` with a reducer function and intitial state.

Suggested approach

- ```<App />``` Use a reducer to store and manage all application state: loading, results, history
  - Add to history array in state after every api call
method, url, results (json)
- ```<History />``` Iterates the history array in state and shows the previous API calls
  - When one is clicked on, show the results in the results component
  - Note: the results component renders whatever is in state.

## RESTy Phase 3

Connect RESTy with APIs, running live requests

In phase 3, we will be connecting RESTy to live APIs, fetching and displaying remote data. Our primary focus will be to service GET requests

The following user stories detail the major functionality for this phase of the project.

- As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data
- As a user, I want to see the results returned from an API request in my browser in a readable format
- Application Flow:

  - User enters an API URL
  - Chooses a REST Method
  - Clicks the “Go” button
  - Application fetches data from the URL given, with the method specified
  - Displays the response headers and results separately
  - Both headers and results should be “pretty printed” JSON

Refactor application methods to allow for browser side HTTP requests to be sent.
Your implementation should allow the user to set a ```url```, ```method```, and request ```body```.
Make sure all relavent request and response data is displayed to the User.
Suggested approach:

- ```<Form />``` component, ```onSubmit()``` sends the user’s entries to the ```<App />``` via method sent in through props
- ```<App />``` does a check on the request data from the form and updates the request variable in state with the ```url```, ```method```, and potentially the ```body```
- ```<App />``` has an effect hook that’s looking for changes to the request variable in state, and in response, runs the API request with the new request options from state
- ```<App />``` updates state with the results of the API Request
- ```<Results />``` sees the new API data as a prop and renders the JSON

## RESTy Phase 2

Retrieving User Input and Managing State

In phase 2, we will be receiving user input in preparation of connecting to live APIs, using the useState() hook in our functional components

The following user stories detail the major functionality for this phase of the project.

- As a user, I want to enter the REST Method and URL to an API
- As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format
- Application Flow:

  - User enters an API URL
  - Chooses a REST Method
  - Clicks the “Go” button
  - Application fetches data from the URL given, with the method specified
  - Displays the response headers and results separately
  - Both headers and results should be “pretty printed” JSON

Extend your React Application so that your functional components are able to manage their own state variables using the useState Hook.
NOTE: It is not a requirement to make the actual API call. That can be mocked with “fake” data

Refactor any components using this.setState to implement the useState react API hook.
Refactor the Form Component to implement user input from form elements, instead of hard coded string values.
Suggested Component Hierarchy and Application Architecture:

- `index.js` - Entry Point
- `App.js` - Container
  - Holds application state: The Request (from the form) and the Response (from the API)
  - A class method that can update state
  - Renders 2 Child Components
- `<Form />`
  - Expects a function to be sent to it as a prop
  - Renders a URL entry form
  - A selection of REST methods to choose from (“get” should be the default)
    - The active selection should be displayed/styled differently than the others
  - Renders a Textarea to allow the user to type in a JSON object for a POST or PUT request
  - On submit
    - Send the Form entries back to the `<App>` using the method sent down in props
    - Form will run the API request
      - Toggle the “loading” status before and after the request
- `<Results />`
  - Conditionally renders “Loading” or the data depending on the status of the request
  - Expects the count, headers, results to be sent in as props
  - Renders the count
  - Renders the Result Headers as “pretty” JSON
  - Renders the Result Body as “pretty” JSON

## RESTy Phase 1

Today, we begin the first of a 4-Phase build of the RESTy application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner.

Refactor the RESTy application as follows:

- Convert all child components of App.js from classes to functions
  - The App component serves as the container for all sub-components of this application.
  - Leave this component as a Class.
  - Make sure all base styles for App are included in a .scss imported within App.js.
  - Ensure that the Header, Footer, Results and Form components are imported using ES6 import syntax.

- Use .scss files to style each component
  - Each of the components use their own .scss file for styling.

- Core application functionality should remain unchanged:
  - The `<Form>` component should:
    - Call a function on submit that updates the `<App/>` component via a function sent down as a prop so that the app can process the form values.
  - The `<Results/>` component should show mock API results.

## Author

Heather Bisgaard, Software Engineer

## Collaborators

- Charlie Fadness

## Setup

## Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## References

- Class videos & github repo
- [How to deploy React App to GitHub Pages](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)

## Links

- [Netlify](https://hbiz-resty.netlify.app/)

- [Github](https://github.com/vbchomp/resty)

## UML

![Lab26_UML](/img/Lab26_UML.png)
![Lab26_live](/img/Lab26_live.png)
