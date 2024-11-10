# React Calculator App

This repository contains a basic calculator application built with React and Vite. This app was initially developed during a React.js workshop/hands-on session to help learners understand the fundamentals of React, including component structure, state management, and props.

## Project Overview

The calculator app allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The app leverages React for a component-based structure and state management, and uses the `eval()` function to evaluate the final expression.

The calculator has the following features:

- Basic operations: addition, subtraction, multiplication, and division.
- Clear (`AC`) and delete (`DEL`) functions.
- Modulus (`%`), decimal point (`.`), and zero (`0`, `00`) buttons.
- Evaluation of expressions with the `=` button, using `eval`.

The project structure is straightforward, with a single component `Calculator` that manages the entire interface and calculation logic and a `Display` component that manages the display of the calculation result.

### Hands-On Session

During the hands-on session, we covered the essentials of React, including components, props, and state, while building this calculator app. Due to time constraints, we were unable to complete the final step, which was implementing the `eval()` function to evaluate the expression. This has been completed in the code here, so learners can see the full working example.

### Implementation Guide

The calculator's buttons are set up to perform different operations based on the `onClick` events:
- **Clear (AC)**: Resets the display by setting `res` to an empty string.
- **Delete (DEL)**: Deletes the last character in the display by slicing the current `res` value.
- **Operators (+, -, *, /)** and **Digits (0-9)**: Update the display by appending the corresponding character to `res`.
- **Evaluate (=)**: Uses `eval()` to evaluate the expression and display the result.

You can find these implementations within the `Calculator` component in `Calculator.js`.



## Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed. Download them from the [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/webgaurav02/calculator-devconnect.git

2. **Install dependencies**:
   ```bash
   cd calculator-devconnect
   npm install

3. Run the application
    ```bash
    npm run dev

4. Open your browser and go to http://localhost:5173 to see the calculator in action!

## Code Highlights

In the `Calculator` component, each button uses an `onClick` event to update the expression displayed on the calculator screen. The final calculation is performed using:

```javascript
<input type="text" value='=' readOnly='true' className="button yellow" onClick={(e) => { props.setRes(eval(props.res)) }} />
```

This executes the expression entered by the user when the = button is clicked, updating the result display.

> **Note**: While `eval` is used here for simplicity, please be cautious about using it in production applications, as it can pose security risks if not handled properly.


