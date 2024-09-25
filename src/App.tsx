import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPage from "./features/Accordion/AccordionPage";
import ButtonPage from "./features/Button/ButtonPage";
import DropdownPage from "./features/Dropdown/DropdownPage";
import ModalPage from "./features/Modal/ModalPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
