import React from "react";

interface Item {
  id: number;
  name: string;
}

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <ul className="list-none p-4 md:p-8">
      {items.map((item) => (
        <li
          className="cursor-pointer border-b border-gray-300 py-2"
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
