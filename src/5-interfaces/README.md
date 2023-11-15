## Interfaces in TypeScript

### Definition: Creates a new type, describing the property names and value types of an object

#### General strategy:

- Create functions that accept arguments that are type with interfaces
- Objects/classes can decide to 'implement' a given interface to work with a function

#### Notes:

- Fixes long annotations
- When we define interface we list out property names and types (not limited to primitives)
- Syntax of interface is demonstrated in interfaces.ts
- Interfaces act as gatekeepers to functions ensuring they satisfy the interface requirements needed to work

#### When to use this knowledge:

- Single interface can describe the shape or properties of very different objects as long as it meets the minimum interface requirements
- Objects can interact with many different functions allowing our code to be more reusable with generic interfaces
