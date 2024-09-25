import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "./Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(!showModal);

  return (
    <div>
      <Button variant="primary" rounded onClick={handleShowModal}>
        Open Modal
      </Button>

      {showModal && (
        <Modal onClose={handleShowModal}>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            velit excepturi accusamus illo soluta fuga, delectus, ratione id vel
            quo reiciendis eligendi necessitatibus, omnis recusandae nulla.
          </p>
          <Button onClick={handleShowModal} rounded>
            Close Modal
          </Button>
        </Modal>
      )}
    </div>
  );
};

export default ModalPage;
