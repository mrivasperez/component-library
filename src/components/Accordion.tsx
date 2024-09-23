import { useState } from "react";

export type AccordionItems = { id: string; label: string; content: string }[];

interface AccordionProps {
  items: AccordionItems;
}

const Accordion = ({ items }: AccordionProps) => {
  const [expandedItemIndex, setExpandedItemIndex] = useState<
    undefined | number
  >();

  const handleClickItem = (clickedItemIndex: number) => {
    if (clickedItemIndex === expandedItemIndex)
      return setExpandedItemIndex(undefined);
    else return setExpandedItemIndex(clickedItemIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedItemIndex;
    const icon = <span>{isExpanded ? "⯅" : "⯆"}</span>;
    return (
      <div key={item.id}>
        <div onClick={() => handleClickItem(index)}>
          {icon}
          {item.label}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
