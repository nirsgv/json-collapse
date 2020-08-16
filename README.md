Please try the [Deployed App](https://peaceful-bastion-86249.herokuapp.com/).

## JSON COLLAPSE

A reusable UI component that retrieves JSON data from a given URL and shows it in a tree view where nodes can be expanded and collapsed.\
The heart of this UI component lies within the 'RecursiveMenu' functional component, which accepts an object, and calls it's inner 'recursiveMenuFunc' function with that object.\
The 'recursiveMenuFunc' function renders leaf nodes (breaking out) as list-items containing a span with the it's content.
If the nodes are of type array or object, that data is mapped over to render list-items containing new lists and the recursive function itself is used as the mapper function. To map over objects - Object.values() is conveniently used to retreive values to an array form.


## TECH

React is used as a UI-Library.\
Hooks for state management (useReducer, useState).\
Styled components for styling purposes.
