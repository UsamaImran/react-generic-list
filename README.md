# react-generic-list

this is basic generic react component to render a list which is typesafe
React Generic List - README
This project showcases the use of the List component from the react-generic-list package.

Installation
To use the List component, you need to install the react-generic-list package. You can do this by running the following command:

`npm install react-generic-list`

Usage
To use the List component, you need to import it into your React component like this:

`import { List } from 'react-generic-list';`
Then, you can use the component in your render function like this:

`<List
items={[1, 2, 3, 4, 5, 6, 7]}
keyExtractor={(item) => item}
render={(item) => item}
style={{ textDecoration: 'none' }}
childProps={{ style: { textDecoration: 'none' } }}
/>;`
This will render a list of numbers from 1 to 7, with each item having no text decoration.

Props
The List component takes the following props:

items: an array of items to render in the list
keyExtractor: a function that takes an item and returns a unique key for it
render: a function that takes an item and returns the component to render for that item
style: an object containing style properties for the list container
childProps: an object containing props to pass down to each child component
For more information, please refer to the react-generic-list package documentation.
