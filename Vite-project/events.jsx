
/*
=================================================
       REACT EVENTS AND FORMS - NOTES
=================================================

TOPICS:

1. What are Events?
2. What are Event Handlers?
3. Handling Events
4. Common React Events
5. Passing Functions vs Calling Functions
6. Event Object
7. Controlled Inputs
8. onChange Event
9. e.target.value
10. What are Forms?
11. Handling Form Submission
12. e.preventDefault()
13. Multiple Inputs in a Form
14. Managing Multiple Fields with One State
15. Immutable State Updates
16. Quick Revision

=================================================
1. WHAT ARE EVENTS?
=================================================

Events are actions that happen in the browser
because of user interaction.

Examples:
- Clicking a button.
- Typing something in an input box.
- Moving the mouse over an element.
- Pressing a keyboard key.
- Submitting a form.

React allows us to respond to these events
using special JSX attributes called event props.

Examples:
onClick
onChange
onMouseEnter
onMouseLeave
onSubmit
onKeyDown
onKeyUp

=================================================
2. WHAT ARE EVENT HANDLERS?
=================================================

An event handler is a function that runs
when a particular event happens.

Example:

function SaveButton() {

  function handleClick() {
    console.log("Saved!");
  }

  return (
    <button onClick={handleClick}>
      Save
    </button>
  );
}

Explanation:

handleClick = Event handler function.

onClick = Event prop.

When the user clicks the button,
React executes handleClick().

=================================================
3. HANDLING EVENTS
=================================================

React handles events by passing a function
to an event prop.

Example:

function ClickButton() {

  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

Important:

1. Write the event handler function.
2. Pass the function to the event prop.
3. React executes it when the event occurs.

=================================================
4. COMMON REACT EVENTS
=================================================

A. onClick

Used when a user clicks an element.

<button onClick={handleClick}>
  Click
</button>


B. onChange

Used when an input value changes.

<input onChange={handleChange} />


C. onSubmit

Used when a form is submitted.

<form onSubmit={handleSubmit}>
</form>


D. onMouseEnter

Used when the mouse enters an element.

<div onMouseEnter={handleMouseEnter}>
  Hover Me
</div>


E. onMouseLeave

Used when the mouse leaves an element.

<div onMouseLeave={handleMouseLeave}>
  Move Mouse Away
</div>


F. onKeyDown

Used when a keyboard key is pressed.

<input onKeyDown={handleKeyDown} />


G. onKeyUp

Used when a keyboard key is released.

<input onKeyUp={handleKeyUp} />


=================================================
5. PASSING FUNCTIONS VS CALLING FUNCTIONS
=================================================

This is one of the most important concepts
in React event handling.

CORRECT WAY:

<button onClick={handleSave}>
  Save
</button>

Here:
We pass the function to React.
React calls it when the button is clicked.


WRONG WAY:

<button onClick={handleSave()}>
  Save
</button>

Here:
The function executes immediately
during rendering instead of waiting
for the click.

REMEMBER:

onClick={handleSave}
Pass the function.

onClick={handleSave()}
Call the function immediately.


PASSING ARGUMENTS:

If we want to pass an argument,
use an arrow function.

Example:

function handleSave(id) {
  console.log("Saved ID:", id);
}

<button onClick={() => handleSave(10)}>
  Save
</button>

The arrow function allows us to pass
arguments when the event occurs.


=================================================
6. WHAT IS THE EVENT OBJECT?
=================================================

When an event happens, React passes
an event object to the event handler.

It is commonly named e or event.

The event object contains information
about the event.

Examples:

e.target
e.target.value
e.preventDefault()

Example:

function handleClick(e) {
  console.log(e);
}

<button onClick={handleClick}>
  Click
</button>

IMPORTANT:

e.target
Refers to the element that triggered the event.

e.target.value
Gets the current value of an input.

e.preventDefault()
Stops the browser's default action.


=================================================
7. CONTROLLED INPUTS
=================================================

A controlled input is an input element
whose value is controlled by React state.

In a controlled input:

1. State stores the input value.
2. value={state} displays the value.
3. onChange updates the state.
4. The input and state stay synchronized.

There are TWO important parts:

value={name}

onChange={(e) => setName(e.target.value)}

Example:

import { useState } from "react";

function NameBox() {

  const [name, setName] = useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}

=================================================
8. WHAT IS onChange?
=================================================

onChange is an event that runs
when an input value changes.

Example:

function handleChange(e) {
  console.log(e.target.value);
}

<input
  type="text"
  onChange={handleChange}
/>

When the user types something,
the event handler executes.

=================================================
9. WHAT IS e.target.value?
=================================================

e.target.value gives us the current
value entered by the user.

Example:

function InputBox() {

  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
      />

      <h2>{text}</h2>
    </div>
  );
}

Explanation:

e = Event object.

target = Input element.

value = Current text inside the input.

setText() = Updates the state.

=================================================
10. WHAT ARE FORMS?
=================================================

Forms are used to collect information
from users.

Examples:

- Login forms.
- Signup forms.
- Contact forms.
- Registration forms.
- Feedback forms.

A React form generally contains:

1. Input fields.
2. State to store values.
3. Event handlers.
4. A submit button.
5. A submit handler.

=================================================
11. HANDLING FORM SUBMISSION
=================================================

React uses the onSubmit event
to handle form submissions.

Example:

function MyForm() {

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter name"
      />

      <button type="submit">
        Submit
      </button>

    </form>
  );
}

IMPORTANT:

Use onSubmit on the form element.

Use type="submit" on the submit button.


=================================================
12. WHAT IS e.preventDefault()?
=================================================

By default, submitting an HTML form
can cause the browser to reload the page.

In React, we usually want to handle
the form submission ourselves.

e.preventDefault() stops that default action.

Example:

function handleSubmit(e) {
  e.preventDefault();

  console.log("Form submitted!");
}

IMPORTANT:

Without preventDefault():
The browser performs its default form action.

With preventDefault():
The browser does not perform that action,
and React can handle the submission.


=================================================
13. MULTIPLE INPUTS IN A FORM
=================================================

A form can contain multiple input fields.

Each input can have its own state.

Example:

import { useState } from "react";

function SignupForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);

  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <button type="submit">
        Sign Up
      </button>

    </form>
  );
}

Explanation:

name state stores the name.

email state stores the email.

onChange updates the respective state.

onSubmit handles form submission.

preventDefault prevents the page reload.


=================================================
14. ONE STATE OBJECT FOR MULTIPLE FIELDS
=================================================

For small forms, separate useState hooks
are easy to understand.

For larger forms, we can store all
form fields inside one state object.

Example:

import { useState } from "react";

function SignupForm() {

  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    console.log(form);

  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={form.name}
        onChange={handleChange}
      />

      <br />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
      />

      <br />

      <button type="submit">
        Submit
      </button>

    </form>
  );
}

IMPORTANT:

name="name"
Identifies the name field.

name="email"
Identifies the email field.

e.target.name
Gets the name of the input field.

e.target.value
Gets the value entered by the user.

[e.target.name]
Uses the input's name as a dynamic
object property.

...form
Copies all existing form values.

setForm()
Updates the state with a new object.


=================================================
15. IMMUTABLE STATE UPDATES
=================================================

React state should never be modified directly.

WRONG WAY:

form.email = e.target.value;

WHY WRONG?

1. It directly mutates the existing object.
2. React may not detect the change.
3. It does not follow React's state rules.

CORRECT WAY:

setForm({
  ...form,
  email: e.target.value
});

This creates a new object
and updates the email field.

Another example:

setForm({
  ...form,
  [e.target.name]: e.target.value
});


=================================================
16. COMPLETE WORKING FORM EXAMPLE
=================================================

import { useState } from "react";

function CompleteForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    console.log("Form Details:", form);

    alert("Form submitted successfully!");

    setForm({
      name: "",
      email: "",
      password: ""
    });

  }

  return (
    <div>

      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default CompleteForm;


// ================================================
// 17. QUICK REVISION
// ================================================

/*
EVENT:
An action performed by the user.

EVENT HANDLER:
A function that responds to an event.

onClick:
Handles button clicks.

onChange:
Handles input value changes.

onSubmit:
Handles form submission.

e:
Event object.

e.target:
Element that triggered the event.

e.target.value:
Current value of an input.

e.preventDefault():
Stops the browser's default action.

CONTROLLED INPUT:
An input controlled by React state.

value={text}:
Displays the state value in the input.

onChange:
Updates the state when input changes.

useState:
Stores input and form data.

SPREAD OPERATOR (...):
Copies existing object properties.

onClick={handleClick}:
Passes the function.

onClick={handleClick()}:
Calls the function immediately.

=================================================
18. IMPORTANT GOLDEN RULES
=================================================

1. Always pass the event handler function,
   don't call it directly.

2. Use onChange to track input changes.

3. Use value={state} for controlled inputs.

4. Use e.target.value to read input values.

5. Use onSubmit on the form element.

6. Use e.preventDefault() to stop
   the default form submission action.

7. Use setState() to update state.

8. Never mutate state objects directly.

9. Use the spread operator to preserve
   existing object properties.

10. Use type="submit" for form buttons.

=================================================
          END OF NOTES
=================================================
*/
