This project is built on [Create React App](https://github.com/facebookincubator/create-react-app) with [react-scripts-ts](https://www.npmjs.com/package/react-scripts-ts)

Details of the original guide can be found [here](https://github.com/wmonk/create-react-app-typescript/blob/master/template/README.md)

## Getting started
To start using this project, clone the repository and run

`npm install`

`npm start`

To start running a docker image of the database on your local machine, first edit the .env file with the following variables:
```
DB=YOUR_DB_NAME // This will also be your container name
DB_USER=YOUR_DB_USERNAME
DB_PASSWORD=YOUR_DB_PASSWORD
```

Then run:

`npm run db:up`

This creates a new instance of the container image for the db. Data will not be persisted across images.


## Guidelines
- Capitalize component names
- Use single quotes for strings
- Use selector functions when possible
- Keep components small (Very small. More than 10 lines is probably too big)
- If certain codes are repeated, extract them to components
- Avoid synchronising state between child and parent
- Use shouldComponentUpdate (returns true/false) to optimise performance
- Use absolute path if importing from other directories/folders. Use relative path when importing within the same directory
- If npm dependency is not used in production (e.g. jest), save it under devDependecies via save-dev
- Actions (per reducer) should be defined in an enum
- For components that have interaction with redux, abstract the connect function in a {componentName}.container.ts and point its index.ts to that file
- Prepand all connected redux state and actions with a redux_ prefix => e.g. redux_login, redux_user
- For Components, methods that deals with rendering elements are prefixed with render e.g. renderProfile
- For Components, methods that deals with handling events (i.e. mouseclicks) are prefixed with on e.g. onClick
- All components must have a className of format: block__elementName--modifier => e.g. form || form__username || form__username--disabled