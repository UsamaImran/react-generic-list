import React, { ReactNode, useEffect, useRef, useState } from 'react';

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

function List<T>({
  items,
  render,
  keyExtractor,
  childProps,
  onItemSelect,
  ...rest
}: ListProps<T>) {
  const onClickHandler = (selectedItem: T, id?: string | number) => {
    onItemSelect && onItemSelect(selectedItem, id);
  };

  return (
    <ul {...rest}>
      {items.map((item, index) => (
        <li
          key={keyExtractor(item, index)}
          {...childProps}
          onClick={() => onClickHandler(item, keyExtractor(item))}
        >
          {render(item, index)}
        </li>
      ))}
    </ul>
  );
}

export default List;
