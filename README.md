# SHOPPING LIST

## Instructions for Running, Testing and Building
The default notes provided by create-react-app for running, tesing and building the app are still included at end of this file (see 'Getting Started with Create React App').


## Build Status - Known bugs or Issues
### React's StrictMode Issue wehn using local storage
There is a React issue which is well documented on stack overflow and elsewhere:
React's StrictMode causes a double render.This causes the local storage to be wiped out on first render. The code in app.js and index.js provide one well documented solution, with another well document solution also provided, but commented-out.
The balance is between using strictMode's advantage in dev stage, vs avoiding double render in order to be able to delete last item in shoppingList.


## Design - Choices and Rationale
### Overall
A diagram is provided in 'Design' directory.
Given the advised timescales for this acticity I have decided to tackle stories 1,2,3,4,5,6,8 from the 'Recruitment Coding Challenge'.
I 'spiked' story 7, but it appears the API is no longer working, and in any case getting exact price match with shopping list items would be complex.
Story 10 is not possible in timescales because I have not used this technology as yet.
Story 11 is also outside these timescales and would require a database solution rather than local storage, for security reasons.
Story 9 may be possible if time permits.

### Persistant Shopping List
This requirement has been achived in this case using local storage, i.e, the local browser cache.
For a shopping list this should be sufficient.
Another solution would be to store data in a database (e.g. SQL or MongoDB), which could be stored at front-end, or at back-end via developing an HTPP server in node.js for example.

## Tech Stack
### Front-End
React seemed an ideal choice. The 'Recruitment Coding Challenge' mentioned pages and page visits, therefore I went for React, rather than React-Native. Jest was used for testing.

### Back-End
In this case there was no back-end. The main reason to have a backend would be for the persistency of the shopping list. In this case, as explained above, this was achieved via local storage, which is probably sufficient for a short-term shopping list.

### Testing
Static Module tesing has been done in jest for the utils.js functions.
The UI code was visually tested as it was being built via the 'npm start' command.
Also using inspect mode, console.logs were applied and some limited use of 'toggle device' to see app on typical mobile phones etc.

## Time Spent on Activity - and further things to be done in future
### 6 Hours dev time
This version has concluded after 6 hours dev time, with all stories explained above in Design Choices completed, and styling added.
Ahead of the exercise, I did investigate ('spike') the use of local memory storage because I had not previously used it.
I also drew the design before the start of the development phase.
### Further changes
With more time, the next steps would include:
- add more restrictions/validation to the user input for new items.
- ensure the app works effectively on different size screens.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
