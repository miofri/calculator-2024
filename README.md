# Delivery calculator
![image](./assets/calculator.png)

## Wolt Summer 2024 Engineering Internships Take-home assignment. </br>
A delivery calculator that adheres to specific conditions laid in [this](https://github.com/woltapp/engineering-internship-2024?tab=readme-ov-file#specification) repository. </br>
The calculator takes several inputs: the value of the cart in Euro, delivery distance, amount of items, as well as time of order. Based on the specification linked above, it will calculate the delivery fee. The app also features a dark/light theme toggle.

## Built with
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

## Project structure
. </br>
├── src </br>
│   ├── components - React components </br>
│   ├── interfaces </br>
│   ├── reducers </br>
│   ├── services - contains business logic - in this case, the main calculation </br>
│   │   └── utils - helper functions for main business logics </br>
│   └── ui-components - styled-component files & theme </br>
│ </br>
├── tests - unit/integration tests</br>

## Prerequisites
- npm
- TypeScript
- React
- Styled Components
- Jest for testing

## How to use
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches Jest and runs all tests in the ./tests directory.

