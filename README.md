This project is built on [Create React App](https://github.com/facebookincubator/create-react-app) with [react-scripts-ts](https://www.npmjs.com/package/react-scripts-ts)

Details of the original guide can be found [here](https://github.com/wmonk/create-react-app-typescript/blob/master/template/README.md)

## Getting started
To start using this project, clone the repository and run

`yarn start`

## Guidelines
- Capitalize component names
- Use selector functions
- Keep components small (Very small. More than 10 lines is probably too big)
- If certain codes are repeated, extract them to components
- Avoid synchronising state between child and parent
- Use shouldComponentUpdate (returns true/false) to optimise performance