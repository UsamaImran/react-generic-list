import React, { ReactNode } from 'react';
type ContainerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
type ChildProps = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
type ListProps<T> = {
    items: T[];
    childProps?: ChildProps;
    keyExtractor: (item: T, index?: number | string) => string | number;
    render: (item: T, index?: number | string) => ReactNode;
    onItemSelect?: (item: T, index?: number | string) => void;
} & ContainerProps;
export declare function List<T>({ items, render, keyExtractor, childProps, onItemSelect, ...rest }: ListProps<T>): JSX.Element;
export {};
