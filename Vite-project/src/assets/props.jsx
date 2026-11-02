
/*
=================================================
        REACT PROPS - COMPLETE NOTES
             JSX + TYPESCRIPT
=================================================

TOPICS:
1. What are Props?
2. Passing Props
3. Receiving Props
4. Destructuring Props
5. Props Flow
6. Typing Props with TypeScript
7. Different Types of Props
8. Optional Props
9. Default Values
10. Reusing Components
*/

// ================================================
// 1. WHAT ARE PROPS?
// ================================================

// Props means Properties.
// Props are used to pass data from a parent component
// to a child component.
//
// Props make components reusable.
// The same component can display different information.

// Example:

function ProfileCard(props) {
  return <h2>{props.name}</h2>;
}

// Passing props:
function App() {
  return (
    <>
      <ProfileCard name="Ada" />
      <ProfileCard name="Grace" />
    </>
  );
}

// ================================================
// 2. PASSING PROPS
// ================================================

// Props are passed as attributes inside JSX tags.

function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

function App2() {
  return (
    <>
      <Welcome name="Alex" />
      <Welcome name="John" />
      <Welcome name="Sam" />
    </>
  );
}

// ================================================
// 3. RECEIVING PROPS
// ================================================

// React collects all passed attributes into
// one object called props.

function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

// Usage:
<Student name="Rahul" age={20} />

// ================================================
// 4. DESTRUCTURING PROPS
// ================================================

// Instead of writing props.name,
// we can directly extract the values.
//
// This is called destructuring.
// It is the recommended approach.

function Person({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage:
<Person name="Alex" age={21} />


// ================================================
// 5. PROPS FLOW
// ================================================

// Props flow in ONE direction:
//
// Parent Component
//       |
//       v
// Child Component
//       |
//       v
// Display on Screen
//
// Important Rules:
// 1. Parent passes data to child.
// 2. Child can read props.
// 3. Child cannot modify props.
// 4. Props are READ-ONLY.
// 5. Data flows from parent to child.

// ================================================
// 6. TYPING PROPS WITH TYPESCRIPT
// ================================================

// TypeScript helps us catch errors before
// running the React application.
//
// It checks:
// 1. Wrong data types.
// 2. Missing required props.
// 3. Misspelled prop names.

// NOTE:
// TypeScript examples below belong in a .tsx file.

// Using type Props:

type PersonProps = {
  name: string;
  age: number;
};

function PersonCard({ name, age }: PersonProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

// Correct usage:
<PersonCard name="Alex" age={20} />

// Incorrect usage examples:
//
// <PersonCard name="Alex" />
// Error: age is missing.
//
// <PersonCard name="Alex" age="20" />
// Error: age should be a number.
//
// <PersonCard naem="Alex" age={20} />
// Error: name is misspelled.

// ================================================
// 7. TYPE VS INTERFACE
// ================================================

// Two ways to define prop types:
//
// METHOD 1: Using type

type Props = {
  name: string;
  age: number;
};

// METHOD 2: Using interface

interface UserProps {
  name: string;
  age: number;
}

// Both work for basic React props.
// This course uses the type approach.

// ================================================
// 8. DIFFERENT TYPES OF PROPS
// ================================================

// RULE:
//
// String  -> Double quotes
// Number  -> Curly braces {}
// Boolean -> Curly braces {}
// Array   -> Curly braces {}
// Object  -> Curly braces {}

// --------------------------------
// A. STRING PROPS
// --------------------------------

type StringProps = {
  title: string;
};

function TitleCard({ title }: StringProps) {
  return <h2>{title}</h2>;
}

// Usage:
<TitleCard title="Hello World" />


// --------------------------------
// B. NUMBER PROPS
// --------------------------------

type NumberProps = {
  count: number;
};

function Counter({ count }: NumberProps) {
  return <p>Count: {count}</p>;
}

// Usage:
<Counter count={10} />


// --------------------------------
// C. BOOLEAN PROPS
// --------------------------------

type BooleanProps = {
  active: boolean;
};

function Status({ active }: BooleanProps) {
  return (
    <p>
      {active ? "Active" : "Inactive"}
    </p>
  );
}

// Usage:
<Status active={true} />
<Status active={false} />


// --------------------------------
// D. ARRAY PROPS
// --------------------------------

type ArrayProps = {
  subjects: string[];
};

function SubjectList({ subjects }: ArrayProps) {
  return (
    <ul>
      {subjects.map((subject, index) => (
        <li key={index}>{subject}</li>
      ))}
    </ul>
  );
}

// Usage:
<SubjectList
  subjects={["Math", "Science", "English"]}
/>


// --------------------------------
// E. OBJECT PROPS
// --------------------------------

type ObjectProps = {
  user: {
    name: string;
    age: number;
  };
};

function UserCard({ user }: ObjectProps) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
    </div>
  );
}

// Usage:
<UserCard
  user={{
    name: "Alex",
    age: 20
  }}
/>


// ================================================
// 9. OPTIONAL PROPS
// ================================================

// Sometimes a prop is not compulsory.
//
// Use ? after the property name
// to make it optional.

type OptionalProps = {
  title: string;
  subtitle?: string;
};

function Card({ title, subtitle }: OptionalProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

// Both usages are valid:

<Card title="Hello" />

<Card
  title="Hello"
  subtitle="Welcome!"
/>


// ================================================
// 10. DEFAULT VALUES
// ================================================

// We can provide a default value using =
// inside the destructured props.

type DefaultProps = {
  title: string;
  subtitle?: string;
};

function DefaultCard({
  title,
  subtitle = "No subtitle"
}: DefaultProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

// Without subtitle:
<DefaultCard title="Hello" />

// Output:
// Hello
// No subtitle

// With subtitle:
<DefaultCard
  title="Hello"
  subtitle="Welcome to React"
/>

// Output:
// Hello
// Welcome to React


// ================================================
// 11. REUSING COMPONENTS WITH DIFFERENT DATA
// ================================================

// One of the biggest advantages of props
// is that we can reuse the same component.
//
// We don't need to create separate components
// for every person.

type ProfileProps = {
  name: string;
  age: number;
};

function Profile({ name, age }: ProfileProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

function MainApp() {
  return (
    <>
      <Profile name="Ada" age={25} />
      <Profile name="Grace" age={30} />
      <Profile name="Alex" age={20} />
    </>
  );
}

// Same component.
// Different data.
// This is COMPONENT REUSABILITY!


// ================================================
// 12. QUICK REVISION
// ================================================

/*
PROPS:
Data passed from parent to child.

DESTRUCTURING:
Extracting values directly from props.

READ-ONLY:
Props cannot be modified by child components.

TYPE:
Defines the structure of props.

INTERFACE:
Another way to define prop types.

STRING:
title="Hello"

NUMBER:
count={10}

BOOLEAN:
active={true}

ARRAY:
items={["A", "B", "C"]}

OBJECT:
user={{ name: "Alex" }}

OPTIONAL PROP:
subtitle?: string

DEFAULT VALUE:
subtitle = "No subtitle"

MAIN BENEFIT:
Props make components reusable.
*/

// ================================================
// END OF REACT PROPS NOTES
// ================================================
