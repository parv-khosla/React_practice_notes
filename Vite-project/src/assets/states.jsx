
/*
=================================================
       REACT STATE - COMPLETE NOTES
              useState HOOK
=================================================

TOPICS:
1. What is State?
2. Why do we need State?
3. Normal Variable vs State
4. Props vs State
5. What is useState?
6. Syntax of useState
7. How useState Works
8. Creating a Counter
9. Typing State with TypeScript
10. Re-rendering
11. Updating State
12. Updater Function
13. Updating Objects
14. Updating Arrays
15. Golden Rules of State

=================================================
1. WHAT IS STATE?
=================================================

State is data that a component remembers
and can change while the application is running.

State allows components to:
1. Store data.
2. Update data.
3. Remember data between renders.
4. Update the screen when data changes.

Examples:
- Counter value
- Text entered in an input box
- Opening and closing a menu
- Showing or hiding a message

IMPORTANT:
State is managed inside a component.
Unlike props, state can be updated.
*/

// Example:

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}


// ================================================
// 2. WHY DO WE NEED STATE?
// ================================================

// Imagine we create a counter using
// a normal JavaScript variable.

function NormalCounter() {
  let count = 0;

  function handleClick() {
    count = count + 1;
    console.log(count);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>
        +1
      </button>
    </div>
  );
}

// PROBLEM:
//
// The variable increases in memory,
// but the screen does not update.
//
// WHY?
//
// React does not automatically re-render
// when a normal variable changes.
//
// SOLUTION:
//
// Use the useState hook.


// ================================================
// 3. NORMAL VARIABLE VS STATE
// ================================================

// NORMAL VARIABLE:
//
// let count = 0;
//
// Changing a normal variable does not
// trigger a React re-render.
//
// STATE:
//
// const [count, setCount] = useState(0);
//
// Updating state using setCount tells
// React to update the component.

// Difference:
//
// Normal variable -> No automatic re-render.
// State           -> Triggers a re-render
//                    when the state changes.


// ================================================
// 4. PROPS VS STATE
// ================================================

// PROPS:
//
// 1. Data passed from parent to child.
// 2. Read-only.
// 3. Cannot be modified by child.
// 4. Used to share data between components.
//
// STATE:
//
// 1. Data managed inside a component.
// 2. Can be updated.
// 3. Remembers data between renders.
// 4. Updating state triggers a re-render.
//
// EXAMPLE:
//
// Props = Data given to you.
// State = Data you manage yourself.


// ================================================
// 5. WHAT IS useState?
// ================================================

// useState is a React Hook.
//
// A Hook is a special function provided
// by React that allows us to use React features.
//
// useState allows components to:
// 1. Store information.
// 2. Read the current value.
// 3. Update the value.
// 4. Re-render when the value changes.
//
// Import useState:

import { useState } from "react";


// ================================================
// 6. SYNTAX OF useState
// ================================================

// General syntax:

const [value, setValue] = useState(initialValue);

// Explanation:
//
// value       -> Current state value.
// setValue    -> Function used to update state.
// useState()  -> React Hook.
// initialValue -> Starting value of state.

// Example:

function Example() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}


// ================================================
// 7. HOW useState WORKS
// ================================================

// Example:

function CounterExample() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}

// Working:
//
// STEP 1:
// useState(0) creates state with initial value 0.
//
// STEP 2:
// count stores the current state value.
//
// STEP 3:
// User clicks the button.
//
// STEP 4:
// setCount(count + 1) requests a state update.
//
// STEP 5:
// React re-renders the component.
//
// STEP 6:
// Updated count appears on the screen.


// ================================================
// 8. COMPLETE COUNTER EXAMPLE
// ================================================

// A counter with increment and decrement buttons.

function FullCounter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={increase}>
        +1
      </button>

      <button onClick={decrease}>
        -1
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}


// ================================================
// 9. TYPING STATE WITH TYPESCRIPT
// ================================================

// TypeScript can automatically infer
// the type of state from the initial value.

// NUMBER:

const [count, setCount] = useState(0);
// Type: number

// STRING:

const [name, setName] = useState("");
// Type: string

// BOOLEAN:

const [isActive, setIsActive] = useState(false);
// Type: boolean

// EXPLICIT TYPE:
//
// Sometimes the initial value does not
// tell TypeScript the complete data type.
//
// Example: State starts with null,
// but later stores a user object.

type User = {
  name: string;
  age: number;
};

const [user, setUser] = useState<User | null>(null);

// User can either be:
// 1. A User object.
// 2. null.


// ================================================
// 10. WHAT IS RE-RENDERING?
// ================================================

// Re-rendering means React runs the
// component function again to calculate
// what should appear on the screen.
//
// When state changes:
//
// 1. State setter is called.
// 2. React schedules an update.
// 3. Component renders again.
// 4. React updates the necessary parts
//    of the screen.
//
// IMPORTANT:
//
// Initial value is used only during
// the initial render.
//
// React remembers the latest state
// between renders.


// ================================================
// 11. UPDATING STATE
// ================================================

// ALWAYS use the setter function
// to update state.

// CORRECT WAY:

function CorrectCounter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <button onClick={increase}>
      Count: {count}
    </button>
  );
}

// WRONG WAY:

// count = count + 1;
//
// WHY WRONG?
//
// 1. State variables should not be reassigned.
// 2. React is not informed about the update.
// 3. The screen will not update correctly.
//
// Use setCount() instead.


// ================================================
// 12. UPDATER FUNCTION
// ================================================

// Sometimes we need to update state
// using its previous value.
//
// In this situation, use an updater function.

// SYNTAX:

// setCount(previousValue => previousValue + 1);

// Example:

function UpdaterCounter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(previousCount => previousCount + 1);
  }

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}

// WHY USE AN UPDATER FUNCTION?
//
// It calculates the next state using
// the previous state value.
//
// It is especially useful when multiple
// updates depend on the previous value.

// Example:

setCount(previousCount => previousCount + 1);


// ================================================
// 13. UPDATING OBJECTS IN STATE
// ================================================

// State can also store objects.
//
// IMPORTANT:
// Never directly modify an object in state.
//
// WRONG WAY:

// user.name = "Ada";
//
// This mutates the existing object.

// CORRECT WAY:
//
// Create a NEW object using spread syntax.

type UserInfo = {
  name: string;
  age: number;
};

function UserProfile() {
  const [user, setUser] = useState<UserInfo>({
    name: "Alex",
    age: 20
  });

  function changeName() {
    setUser({
      ...user,
      name: "Ada"
    });
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.age}</p>

      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}

// Explanation:
//
// ...user copies the existing object.
// name: "Ada" updates the name.
// setUser() stores the new object.
//
// The original state object is not mutated.


// ================================================
// 14. UPDATING ARRAYS IN STATE
// ================================================

// Arrays can also be stored in state.
//
// Example:

function TodoList() {
  const [items, setItems] = useState([
    "Study React",
    "Practice JavaScript"
  ]);

  function addItem() {
    setItems(previousItems => [
      ...previousItems,
      "Learn TypeScript"
    ]);
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={addItem}>
        Add Item
      </button>
    </div>
  );
}

// IMPORTANT:
//
// Use spread syntax (...) to create
// a new array.
//
// Avoid directly changing the original
// state array using push(), pop(), etc.


// ================================================
// 15. GOLDEN RULES OF STATE
// ================================================

/*
RULE 1:
Always use the setter function
to update state.

Example:
setCount(count + 1);


RULE 2:
Never directly assign a new value
to the state variable.

Wrong:
count = count + 1;


RULE 3:
Never mutate objects or arrays
directly inside state.

Wrong:
user.name = "Ada";


RULE 4:
Create a new object or array
when updating complex state.

Correct:
setUser({ ...user, name: "Ada" });


RULE 5:
Initial value is used only
during the first render.


RULE 6:
Calling the setter requests
a re-render.


RULE 7:
Use an updater function when
the next state depends on
the previous state.

Example:
setCount(prev => prev + 1);
*/


// ================================================
// 16. QUICK REVISION
// ================================================

/*
WHAT IS STATE?
Data that a component remembers
and can update.

WHAT IS useState?
A React Hook used to manage state.

SYNTAX:
const [value, setValue] = useState(initial);

VALUE:
Stores the current state.

SETTER:
Updates the state.

RE-RENDER:
React runs the component again
to update the UI.

NORMAL VARIABLE:
Does not trigger a React re-render
when changed.

PROPS:
Read-only data received from parent.

STATE:
Changeable data managed by component.

UPDATER FUNCTION:
setCount(prev => prev + 1);

SPREAD OPERATOR:
Used to create new objects and arrays.

GOLDEN RULE:
Never mutate state directly.
Always use the setter.
*/


// ================================================
// END OF REACT STATE NOTES
// ================================================
