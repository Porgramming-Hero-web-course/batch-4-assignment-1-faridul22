# The Power of Union and Intersection Types in TypeScript

TypeScript has greatly improved JavaScript development by introducing types, which help us catch errors early and write clearer code. Among the useful features of TypeScript, **union** and **intersection types** stand out. These types allow us to handle complex data structures and create more flexible, powerful code.

In this blog, we'll dive into:
- What union and intersection types are.
- Why they are important.
- How to use them effectively with examples.

Let's get started!

---

## What Are Union Types?

A **union type** allows a variable to hold one of multiple types. Imagine you want a variable that could either be a `string` or a `number`—union types make this possible. This feature is especially useful when a variable might take different forms depending on context.

### Example: Basic Union Type

```typescript
let userId: string | number;

userId = "user123"; // valid
userId = 456;       // valid
// userId = true;   // Error: Type 'boolean' is not assignable to type 'string | number'



## What Are Intersection Types?

An **intersection type** combines multiple types into one, meaning a variable must meet the requirements of all included types. This is useful when you want an object to have properties from several types.

### Example: Basic Intersection Type

```typescript
interface HasName {
  name: string;
}

interface HasAge {
  age: number;
}

type Person = HasName & HasAge;

const person: Person = {
  name: "John",
  age: 30
};
