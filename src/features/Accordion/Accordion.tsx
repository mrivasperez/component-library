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
    const icon = <span className="pe-2 text-xl">{isExpanded ? "⯅" : "⯆"}</span>;
    return (
      <div key={item.id}>
        <div
          onClick={() => handleClickItem(index)}
          className="flex p-3 bg-gray-50 border-b items-center cursor-pointer"
        >
          {icon}
          {item.label}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
