import Accordion, { AccordionItems } from "./components/Accordion";

function App() {
  const accordionItems: AccordionItems = [
    {
      id: "1",
      label: "What is React?",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus cursus volutpat odio nisl mi scelerisque turpis semper."
    },
    {
      id: "3",
      label: "What is TypeScript?",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus cursus volutpat odio nisl mi scelerisque turpis semper."
    },
    {
      id: "25",
      label: "What is the meaning of life?",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus cursus volutpat odio nisl mi scelerisque turpis semper."
    }
  ];
  return <Accordion items={accordionItems} />;
}

export default App;
