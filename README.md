# react-generic-list

React Generic List - README
This project showcases the use of the List component from the react-generic-list package.

Installation
To use the List component, you need to install the react-generic-list package. You can do this by running the following command:

`npm install react-generic-list`

Usage
To use the List component, you need to import it into your React component like this:

`import { List } from 'react-generic-list';`
Then, you can use the component in your render function like this:

```
<List
items={[1, 2, 3, 4, 5, 6, 7]}
keyExtractor={(item) => item}
render={(item) => item}
/>
```

Props
The List component takes the following props (required):
items: an array of items to render in the list
keyExtractor: a function that takes an item and returns a unique key for it
render: a function that takes an item and returns the component to render for that item

interfaces

```
type ContainerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

type ChildProps = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

type ListProps<T> = {
  items: T[];
  childProps?: ChildProps;
  keyExtractor: (item: T, index?: number | string) => string | number;
  render: (item: T, index?: number | string) => ReactNode;
  onItemSelect?: (item: T, index?: number | string) => void;
} & ContainerProps;
```

For more information, please refer to the react-generic-list package documentation.
