This project is built on [Create React App](https://github.com/facebookincubator/create-react-app) with [react-scripts-ts](https://www.npmjs.com/package/react-scripts-ts)

Details of the original guide can be found [here](https://github.com/wmonk/create-react-app-typescript/blob/master/template/README.md)

## Getting started
To start using this project, clone the repository and run

`npm install`

`npm start`

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